module.exports = function override(config, env) {
    // New config, e.g. config.plugins.push...
    let new_resolve = config.resolve;
    new_resolve['fallback'] = {"fs": false,
        "os": false,
        "path": false,};
    return config
}