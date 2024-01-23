export interface AppProp {
  name: string;
  logo?: string;
  age?: string;
  isTop?: boolean;
  download?: string;
  category: string;
  company: string;
  labels: string;
}

export interface BlogProp {
  cover: string;
  name: string;
  intro?: string;
  author?: string;
  isTop?: boolean;
  path: string;
}
