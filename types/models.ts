interface Contact {
  firstName: string;
  lastName?: string;
  company?: string;
  title?: string;
  location?: string;
  resume?: string;
  emails: string[];
  profiles: string[];
  tags?: { id: string; name: string; }[];
  lists?: { id: string; name: string; }[];
}

export type { Contact };
