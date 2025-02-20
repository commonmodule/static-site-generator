import {
  PostgrestBuilder,
  PostgrestFilterBuilder,
  PostgrestQueryBuilder,
} from "@supabase/postgrest-js";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import EventContainer from "../event/EventContainer.js";

class Supabase extends EventContainer {
  public client!: SupabaseClient;

  public connect(supabaseUrl: string, supabaseKey: string) {
    this.client = createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
      },
    });
  }

  private convertNullToUndefined(obj: any) {
    Object.keys(obj).forEach((key) => {
      if (obj[key] === null) {
        obj[key] = undefined;
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        this.convertNullToUndefined(obj[key]);
      }
    });
  }

  public safeResult<T>(data: T): T {
    if (Array.isArray(data)) {
      data.forEach((obj) => this.convertNullToUndefined(obj));
    } else {
      this.convertNullToUndefined(data);
    }
    return data;
  }

  public async safeFetch<T>(
    tableName: string,
    build: (
      builder: PostgrestQueryBuilder<any, any, unknown>,
    ) => PostgrestFilterBuilder<any, any, any, unknown> | PostgrestBuilder<any>,
  ) {
    const { data, error } = await build(this.client.from(tableName));
    if (error) throw error;
    return this.safeResult<T>(data);
  }
}

export default new Supabase();
