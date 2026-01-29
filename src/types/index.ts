export interface IBlog {
  id: string;
  title: string;
  content: string;
  thumbnail?: string;
  isFeatured: boolean;
  tags: string[];
  views: number;
  authorId: number;
  author: IAuthor;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAuthor {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "SUPER_ADMIN" | "ADMIN" | "USER";
  phone: string;
  picture?: string;
  status: "ACTIVE" | "INACTIVE" | "BLOCK";
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}
