/**
 * (#)application.mjs   1.0.0   09/11/2023
 *
 * Copyright (c) Jonathan M. Parker
 * All Rights Reserved.
 * 
 * @author    Jonathan Parker
 * @version   1.0.0
 * @since     1.0.0
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
