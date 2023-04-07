export interface User {
  id: number;
  name: string;
  email: string;
  password_hash: string;
  public_name: string;
  public_email: string;
  bio: string;
  profile_picture: string;
  is_email_public: boolean;
  is_name_public: boolean;
  created_at: any;
  updated_at: any;
}
