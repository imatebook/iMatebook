export interface AppProp {
  name: string;
  logo?: string;
  age?: string;
  isTop?: boolean;
  download?: string;
  category: string;
  company: string;
  labels: string;
  intro?: string;
  introList?: AppIntroProp[];
  screenshot?: string[];
}

export interface AppIntroProp {
  title?: string;
  image?: string;
  intros: string[];
}

export interface BlogProp {
  cover: string;
  name: string;
  intro?: string;
  author?: string;
  label?: string;
  isTop?: boolean;
  path: string;
}
