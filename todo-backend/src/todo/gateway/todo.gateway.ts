import {
  OnGatewayConnection,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { UserService } from '../../user/services/user.service';
import { AuthService } from '../../auth/services/auth.service';
import { Server, Socket } from 'socket.io';
import { UnauthorizedException } from '@nestjs/common';
import { UserI } from '../../user/user.interface';

@WebSocketGateway({
  namespace: 'todos', cors: { origin: ['http://localhost:3000', 'http://localhost:4200'] },
})
export class TodoGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  constructor(
    private userService: UserService,
    private authService: AuthService,

  ) {}

  async handleConnection(socket: Socket) {
    try {

      // if the token is not valid, this will throw and we can catch & disconnect the user
      const decodedToken = await this.authService.verifyJwt(socket.handshake.auth.Authorization);

      //if valid, get the user from database
      const user: UserI = await this.userService.getOneById(decodedToken.user.id);

      if (!user) {
        console.log('disconnect user');
      } else {
        console.log('user details: ', user);
      } 

    } catch {
      console.log('disconnect user');
      return this.disconnect(socket);
    }
  }

  private disconnect(socket: Socket) {
    socket.emit('Error', new UnauthorizedException());
    socket.disconnect();
  }
}