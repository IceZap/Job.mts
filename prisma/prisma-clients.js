const { PrismaClients } = require('@prisma/client')
const prisma = new PrismaClients();

module.exports = {
    prisma
}
