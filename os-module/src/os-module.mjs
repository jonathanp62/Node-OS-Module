/**
 * (#)os-module.mjs 1.0.0   09/11/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

import os from 'os';

/**
 * The OS module demonstration class.
 *
 * See: https://www.javascripttutorial.net/nodejs-tutorial/nodejs-os-module/
 */

export class OSModule {

    /**
     * Invoke handy OS methods.
     */
    osMethods() {
        let methods = [
            this.currentOS,
            this.upTime,
            this.currentUser,
            this.totalMemory,
            this.freeMemory,
            this.totalCpus,
            this.networkInfo
        ]

        methods.forEach(method => method());
    }

    /**
     * Operating system characteristics.
     */
    currentOS() {
        let currentOS = {
            name: os.type(),
            architecture: os.arch(),
            platform: os.platform(),
            release: os.release(),
            version: os.version()
        };

        console.log(currentOS);
    }

    /**
     * The number of seconds the system has been up.
     */
    upTime() {
        console.log(`The server has been up for ${os.uptime()} seconds.`);
    }

    /**
     * User information.
     */
    currentUser() {
        console.log(os.userInfo());
    }

    /**
     * Total memory.
     */
    totalMemory() {
        console.log(`Total memory: ${os.totalmem()}`);
    }

    /**
     * Free memory.
     */
    freeMemory() {
        console.log(`Free memory : ${os.freemem()}`);
    }

    /**
     * Total CPUs.
     */
    totalCpus() {
        let cpus = os.cpus();

        console.log(`There are ${cpus.length} CPUs`);

        cpus.forEach(cpu => {
            console.log(`Model: ${cpu.model}`);
            console.log(`Speed: ${cpu.speed}`);

            let times = cpu.times;

            console.log(`User: ${times.user}`);
            console.log(`Nice: ${times.nice}`);
            console.log(`Sys : ${times.sys}`);
            console.log(`Idle: ${times.idle}`);
            console.log(`IRQ : ${times.irq}`);
        })
    }

    /**
     * Network information.
     */
    networkInfo() {
        console.log(os.networkInterfaces());
        /*
         * This object needs to be picked apart
         */
    }
}
