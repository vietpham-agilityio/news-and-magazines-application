export interface IMenu {
  key: string;
  name: string;
  path: string;
}

export interface INavMenu extends IMenu {
  subMenu: IMenu;
};

