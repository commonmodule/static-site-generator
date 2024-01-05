import { createClient } from "@supabase/supabase-js";
import EventContainer from "../event/EventContainer.js";
class Supabase extends EventContainer {
    client;
    connect(supabaseUrl, supabaseKey) {
        this.client = createClient(supabaseUrl, supabaseKey, {
            auth: {
                autoRefreshToken: true,
                persistSession: true,
            },
        });
    }
    convertNullToUndefined(obj) {
        Object.keys(obj).forEach((key) => {
            if (obj[key] === null) {
                obj[key] = undefined;
            }
            else if (typeof obj[key] === "object" && obj[key] !== null) {
                this.convertNullToUndefined(obj[key]);
            }
        });
    }
    safeResult(data) {
        if (Array.isArray(data)) {
            data.forEach((obj) => this.convertNullToUndefined(obj));
        }
        else {
            this.convertNullToUndefined(data);
        }
        return data;
    }
    async safeFetch(tableName, build) {
        const { data, error } = await build(this.client.from(tableName));
        if (error)
            throw error;
        return this.safeResult(data);
    }
}
export default new Supabase();
//# sourceMappingURL=Supabase.js.map