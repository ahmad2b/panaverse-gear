export enum ApprovalStatus {
  Pending = "pending",
  Approved = "approved",
  Rejected = "rejected",
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  profile_picture?: string;
  skills?: string[];
  projects?: string[];
  awards?: string[];
  social_media_links?: string[];
  approval_status: ApprovalStatus;
  role_id: number;
}

export interface Role {
  id: number;
  name: string; // Developer or Moderator
}
