/**
 * (#)application.mjs   1.0.0   09/11/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

import { OSModule } from "./os-module.mjs";

/**
 * The application class.
 */
export class Application {
    /**
     * The run method.
     */
    run() {
        new OSModule().osMethods();
    }
}
