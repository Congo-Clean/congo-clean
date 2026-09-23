export interface NavLink {
  label: string;
  path: string;
}

export interface ActionAxis {
  id: string;
  title: string;
  summary: string;
  description: string;
  icon: 'graduation' | 'broom' | 'recycle';
  image: string;
  points: string[];
}

export interface ValueItem {
  title: string;
  description: string;
  icon: 'brain' | 'users' | 'leaf' | 'target';
}
