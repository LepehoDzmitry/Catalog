import { Injectable } from '@angular/core';

import { IStore } from '../interfaces/i-store';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private startData: IStore[] = [
    {
      id: 0,
      name: 'Фирменный салон "Керамин-Уручье"',
      address: 'ул. Уручская 21, Минск',
      operationMode: 'понедельник воскресенье с 9.00 до 20.00',
      products: [
        {
          name: 'Плитка тип 1',
          description: 'Описание плитки 1',
          price: 100
        },
        {
          name: 'Плитка тип 2',
          description: 'Описание плитки 2',
          price: 200
        },
        {
          name: 'Плитка тип 3',
          description: 'Описание плитки 3',
          price: 300
        }
      ]
    },
    {
      id: 1,
      name: 'Галерея "Керамин"',
      address: 'проспект Независимости 46, Минск 220089',
      operationMode: 'понедельник воскресенье с 9.00 до 20.00',
      products: [
        {
          name: 'Плитка тип 1',
          description: 'Описание плитки 1',
          price: 100
        },
        {
          name: 'Плитка тип 2',
          description: 'Описание плитки 2',
          price: 200
        },
        {
          name: 'Плитка тип 3',
          description: 'Описание плитки 3',
          price: 300
        }
      ]
    },
    {
      id: 2,
      name: 'Фирменный салон "Керамин"',
      address: 'улица Осиповичская 18, Минск',
      operationMode: 'понедельник воскресенье с 9.00 до 20.00',
      products: [
        {
          name: 'Плитка тип 1',
          description: 'Описание плитки 1',
          price: 100
        },
        {
          name: 'Плитка тип 2',
          description: 'Описание плитки 2',
          price: 200
        },
        {
          name: 'Плитка тип 3',
          description: 'Описание плитки 3',
          price: 300
        }
      ]
    }
  ];
  private data: IStore[];

  constructor() {
  }

  initStartData() {
    if (!this.isActive()) {
      localStorage.setItem('data', JSON.stringify(this.startData));
      localStorage.setItem('startData', 'true');
    }
  }

  private isActive() {
    if (localStorage.getItem('startData') === 'true') {
      return true;
    }
    return false;
  }

  getData(): IStore[] {
    return this.data = JSON.parse(localStorage.getItem('data'));
  }

  saveData(data = this.data) {
    if (data) {
      this.data = data;
    }
    localStorage.setItem('data', JSON.stringify(data));
  }
}
