const cli = require('next/dist/cli/next-start')

cli.nextStart(['-p', process.env.NEXT_PORT || 3000])
