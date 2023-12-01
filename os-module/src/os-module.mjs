/**
 * (#)os-module.mjs 1.0.0   09/11/2023
 *
 * Copyright (c) Jonathan M. Parker
 * All Rights Reserved.
 * 
 * @author    Jonathan Parker
 * @version   1.0.0
 * @since     1.0.0
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
        ];

        methods.forEach(method => method(this));
    }

    /**
     * Operating system characteristics.
     *
     * @param   {OSModule}  osModule
     */
    currentOS(osModule) {
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
     *
     * @param   {OSModule}  osModule
     */
    upTime(osModule) {
        console.log(`The server has been up for ${os.uptime()} seconds.`);
    }

    /**
     * User information.
     *
     * @param   {OSModule}  osModule
     */
    currentUser(osModule) {
        console.log(os.userInfo());
    }

    /**
     * Total memory.
     *
     * @param   {OSModule}  osModule
     */
    totalMemory(osMOdule) {
        console.log(`Total memory: ${os.totalmem()}`);
    }

    /**
     * Free memory.
     *
     * @param   {OSModule}  osModule
     */
    freeMemory(osModule) {
        console.log(`Free memory : ${os.freemem()}`);
    }

    /**
     * Total CPUs.
     *
     * @param   {OSModule}  osModule
     */
    totalCpus(osModule) {
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
     *
     * @param   {OSModule}  osModule
     */
    networkInfo(osModule) {
        console.log(os.networkInterfaces());

        let network = os.networkInterfaces();

        let lo0 = network.lo0;
        let en0 = network.en0;
        let utun0 = network.utun0;
        let utun1 = network.utun1;
        let utun2 = network.utun2;

        osModule.logNetworkInterface(lo0, 'lo0');
        osModule.logNetworkInterface(en0, 'en0');
        osModule.logNetworkInterface(utun0, 'utun0');
        osModule.logNetworkInterface(utun1, 'utun1');
        osModule.logNetworkInterface(utun2, 'utun2');
    }

    /**
     * Log the specified network interface.
     *
     * @param   {Array}     networkInterface
     * @param   {string}    name
     */
    logNetworkInterface(networkInterface, name) {
        console.log(`Handling network interface ${name}`);

        networkInterface.forEach(netif => {
            console.log(`Address : ${netif.address}`);
            console.log(`Netmask : ${netif.netmask}`);
            console.log(`Family  : ${netif.family}`);
            console.log(`Mac     : ${netif.mac}`);
            console.log(`Internal: ${netif.internal}`);
            console.log(`CIDR    : ${netif.cidr}`);
            console.log(`ScopeID : ${netif.scopeid}`);
        });
    }
}
