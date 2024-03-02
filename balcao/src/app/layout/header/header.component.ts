import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
          label: 'Atendimento',
          icon: PrimeIcons.AMAZON,
          items: [
              {
                  label: 'Fechar/Abrir caixa',
                  icon: PrimeIcons.PLUS
              },
              {
                  label: 'Área de venda',
                  icon: 'pi pi-fw pi-trash'
              }
          ]
      },
      {
          label: 'Caixa',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {
                  label: 'Em breve',
                  icon: 'pi pi-fw pi-align-left'
              },
              {
                  label: 'Em breve',
                  icon: 'pi pi-fw pi-align-right'
              },
              {
                  label: 'Em breve',
                  icon: 'pi pi-fw pi-align-center'
              },
              {
                  label: 'Em breve',
                  icon: 'pi pi-fw pi-align-justify'
              }
          ]
      },
      {
          label: 'Usuários',
          icon: 'pi pi-fw pi-user',
          items: [
              {
                  label: 'Em breve',
                  icon: 'pi pi-fw pi-user-plus'
              },
              {
                  label: 'Em breve',
                  icon: 'pi pi-fw pi-user-minus'
              },
              {
                separator: true
              },
              {
                  label: 'Em breve',
                  icon: 'pi pi-fw pi-users',
                  items: [
                      {
                          label: 'Em breve',
                          icon: 'pi pi-fw pi-filter',
                          items: [
                              {
                                  label: 'Em breve',
                                  icon: 'pi pi-fw pi-print'
                              }
                          ]
                      },
                      {
                          icon: 'pi pi-fw pi-bars',
                          label: 'List'
                      }
                  ]
              }
          ]
      },
      {
          label: 'Em breve',
          icon: 'pi pi-fw pi-calendar',
          items: [
              {
                  label: 'Em breve',
                  icon: 'pi pi-fw pi-pencil',
                  items: [
                      {
                          label: 'Em breve',
                          icon: 'pi pi-fw pi-calendar-plus'
                      },
                      {
                          label: 'Em breve',
                          icon: 'pi pi-fw pi-calendar-minus'
                      }
                  ]
              },
              {
                  label: 'Em breve',
                  icon: 'pi pi-fw pi-calendar-times',
                  items: [
                      {
                          label: 'Em breve',
                          icon: 'pi pi-fw pi-calendar-minus'
                      }
                  ]
              }
          ]
      },
      {
          label: 'Sair',
          icon: 'pi pi-fw pi-power-off'
      }
  ];
  }




}
