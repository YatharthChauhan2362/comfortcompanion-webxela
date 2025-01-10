export class SupabaseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'SupabaseError';
  }
}

export const handleSupabaseError = (error: any) => {
  console.error('Supabase Error:', error);
  throw new SupabaseError(error.message || 'An error occurred with the database connection');
};