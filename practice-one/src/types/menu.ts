export interface IMenu {
  id: string;
  name: string;
  path?: string;
}

export interface INavMenu extends IMenu {
  subMenu: IMenu;
};

