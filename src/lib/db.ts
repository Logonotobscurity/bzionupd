/**
 * Database module
 * In-memory storage implementation with Prisma-like interface
 * TODO: Replace with actual database connection (PostgreSQL, MongoDB, Supabase, etc.)
 */

interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

interface QuoteRequest {
  id: string;
  userId: string;
  requestor_name: string;
  requestor_email: string;
  requestor_phone: string;
  company_name?: string;
  delivery_address: string;
  requested_products: any;
  total_items: number;
  quote_reference: string;
  createdAt: Date;
  user?: User;
}

// In-memory storage
const users: Map<string, User> = new Map();
const quoteRequests: Map<string, QuoteRequest> = new Map();

export const db = {
  user: {
    findUnique: async (options: { where: { email: string } }): Promise<User | null> => {
      for (const user of users.values()) {
        if (user.email === options.where.email) {
          return user;
        }
      }
      return null;
    },
    create: async (options: { data: { email: string; name: string } }): Promise<User> => {
      const id = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const user: User = {
        id,
        email: options.data.email,
        name: options.data.name,
        createdAt: new Date(),
      };
      users.set(id, user);
      return user;
    },
  },
  quoteRequest: {
    create: async (options: { data: any }): Promise<QuoteRequest> => {
      const id = `qr-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const quoteRequest: QuoteRequest = {
        id,
        ...options.data,
        createdAt: new Date(),
      };
      quoteRequests.set(id, quoteRequest);
      return quoteRequest;
    },
    findMany: async (options?: { include?: any; orderBy?: any }): Promise<QuoteRequest[]> => {
      let results = Array.from(quoteRequests.values());
      
      // Apply ordering if specified
      if (options?.orderBy?.createdAt === 'desc') {
        results.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      }
      
      // Include related user data if requested
      if (options?.include?.user) {
        results = results.map((qr) => ({
          ...qr,
          user: users.get(qr.userId) || undefined,
        }));
      }
      
      return results;
    },
    findUnique: async (options: { where: { id: string } }): Promise<QuoteRequest | null> => {
      return quoteRequests.get(options.where.id) || null;
    },
  },
};
