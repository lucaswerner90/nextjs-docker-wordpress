#!/usr/bin/env node
const { exec } = require("child_process");
console.log('[1/2]  Installing NextJS packages...');
exec('cd frontend && npm install && cd ..');
console.log('[2/2]  Installing API packages...');
exec('cd backend/api && npm install && cd .. && cd ..');
console.log('Project dependencies have been installed! Enjoy! <3 ')