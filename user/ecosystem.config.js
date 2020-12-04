module.exports = {
  apps : [{
    name: 'user',
    script: 'app.js',
    instances: '1',
    watch: 'false',
    env:{
      NODE_ENV: 'development'
    
  },
   env_production:{
   NODE_ENV: 'production'
   },
  }],

}
