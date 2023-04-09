export enum ApprovalStatus {
  Pending = "pending",
  Approved = "approved",
  Rejected = "rejected",
}

export interface SuperDevs {
  id?: number;
  username: string;
  email: string;
  password: string;
  full_name: string;
  profile_picture: string;
  phone_number?: string;
  location?: string;
  professional_title: string;
  summary?: string;
  technical_skills?: string[];
  work_experience?: string[];
  education?: string[];
  certifications?: string[];
  projects?: string[];
  github_profile?: string;
  linkedin_profile?: string;
  personal_website?: string;
  social_media_links?: string[];
  availability_status?: string;
  preferred_work_types?: string;
  resume?: string;
  approval_status?: ApprovalStatus;
  role_id?: number;
  role_name?: string; // Include this field if you want to store the role name in the User object as well
}
