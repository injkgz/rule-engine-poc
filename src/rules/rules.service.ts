import { Injectable, NotFoundException } from '@nestjs/common';
const groupRules = {
    conditions: {
      any: [
        {
          fact: 'group',
          operator: 'equal',
          value: 'injecti0n.kg@gmail.com',
          path: '$.title',
        }
      ],
      
    },
    onSuccess() {
      console.log('on success called');
    },
    onFailure() {
      console.log('on failure called');
    },
    event: {
      type: 'message',
      params: {
        data: 'hello-world!',
      },
    },
  };

  const userRules = {
    conditions: {
      any: [
        {
          fact: 'users',
          operator: 'equal',
          value: 'injecti0n.kg@gmail.com',
          path: '$.email',
        }
      ],
      
    },
    onSuccess() {
      console.log('on success called');
    },
    onFailure() {
      console.log('on failure called');
    },
    event: {
      type: 'message',
      params: {
        data: 'hello-world!',
      },
    },
  };
@Injectable()
export class RulesService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  async getRules(type: string): Promise<string> {
      if(type === 'group'){
        return JSON.stringify(groupRules);      
      }
      if(type === 'user'){
        return JSON.stringify(userRules);
      }
      else {
        throw new NotFoundException(type);
      }
    
  }
}
