import { SignUpController } from './signup';

describe('SignUp Controller', () => {
   test('Should return 400 if no name is provided', () => {
      const sut = new SignUpController(); 
      const httpRequest = { 
         body:{
            email: 'any_email@gmail.com',
            password: 'any_password',
            password_confirmation: 'any_password'
         }
      }
      const httpResponse = sut.handle(httpRequest); 
      expect(httpResponse.statusCode).toBe(400);



      expect(1).toBe(1)
   })
})