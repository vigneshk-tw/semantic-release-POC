const config = {
    branches: ['main'],
    tagFormat: "${version}",
    Plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/github',
        '@semantic-release/git',
    ]
}

module.exports = config