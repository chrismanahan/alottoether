module.exports = {
  networks: {
  	development: {
  		host: "localhost",
  		port: 8545,
  		network_id: "*"
    },
  	rinkeby: {
  		host: "localhost",
  		port: 8545,
  		network_id: 4	
  	},
  	live: {
  		host: "localhost",
  		port: 8545,
  		network_id: 1,
  		from: "",
  		gas: 2000000
  	}
  }
};
