import * as dotenv from "dotenv";

let envFile: string;

switch (import.meta.env.NODE_ENV) {
	case "production":
		envFile = "prod.env";
		break;
	case "development":
		envFile = "dev.env";
		break;
	default:
		envFile = "dev.env";
		break;
}

dotenv.config({ path: envFile });
