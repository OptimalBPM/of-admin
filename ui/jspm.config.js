SystemJS.config({
	devConfig: {
		"map": {
			"clean-css": "npm:clean-css@3.4.18",
			"https": "npm:jspm-nodelibs-https@0.2.1",
			"text": "github:systemjs/plugin-text@0.0.2",
			"tty": "npm:jspm-nodelibs-tty@0.2.0",
			"css": "github:frankwallis/plugin-css@master",
			"url": "npm:jspm-nodelibs-url@0.2.0",
			"http": "npm:jspm-nodelibs-http@0.2.0"
		},
		"packages": {
			"npm:clean-css@3.4.18": {
				"map": {
					"source-map": "npm:source-map@0.4.4",
					"commander": "npm:commander@2.8.1"
				}
			},
			"npm:source-map@0.4.4": {
				"map": {
					"amdefine": "npm:amdefine@1.0.1"
				}
			},
			"npm:commander@2.8.1": {
				"map": {
					"graceful-readlink": "npm:graceful-readlink@1.0.1"
				}
			},
			"npm:url@0.11.0": {
				"map": {
					"querystring": "npm:querystring@0.2.0",
					"punycode": "npm:punycode@1.3.2"
				}
			},
			"npm:stream-http@2.6.3": {
				"map": {
					"readable-stream": "npm:readable-stream@2.2.2",
					"inherits": "npm:inherits@2.0.3",
					"builtin-status-codes": "npm:builtin-status-codes@3.0.0",
					"to-arraybuffer": "npm:to-arraybuffer@1.0.1",
					"xtend": "npm:xtend@4.0.1"
				}
			},
			"npm:jspm-nodelibs-url@0.2.0": {
				"map": {
					"url-browserify": "npm:url@0.11.0"
				}
			},
			"npm:jspm-nodelibs-http@0.2.0": {
				"map": {
					"http-browserify": "npm:stream-http@2.6.3"
				}
			}
		}
	},
	transpiler: "ts",
	typescriptOptions: {
		"module": "system",
		"target": "es5",
		"typeCheck": "strict",
		"tsconfig": true,
		"sourceMap": true,
		"removeComments": false
	},
	packages: {
		"/admin": {
			"main": "main",
			"format": "esm",
			"defaultExtension": "ts",
			"meta": {
				"*.ts": {
					"loader": "ts"
				},
				"*.css": {
					"loader": "css"
				},
				"*.html": {
					"loader": "text"
				}
			},
			"npm:debug@2.2.0": {
				"map": {
					"ms": "npm:ms@0.7.1"
				}
			}
		}
	},
	meta: {
		"*.css": {
			"loader": "css"
		}
	}
});

SystemJS.config({
	packageConfigPaths: [
		"npm:@*/*.json",
		"npm:*.json",
		"github:*/*.json"
	],
	map: {
		"@angular/http": "npm:@angular/http@2.4.5",
		"@angular/router": "npm:@angular/router@3.4.5",
		"@angular/upgrade": "npm:@angular/upgrade@2.4.5",
		"OptimalBPM/angular-schema-form-complex-ui": "github:OptimalBPM/angular-schema-form-complex-ui@master",
		"ace": "github:ajaxorg/ace-builds@1.2.6",
		"ace-builds": "npm:ace-builds@1.2.5",
		"angular": "github:angular/bower-angular@1.6.1",
		"angular-animate": "github:angular/bower-angular-animate@1.6.1",
		"angular-cookies": "github:angular/bower-angular-cookies@1.6.1",
		"angular-sanitize": "github:angular/bower-angular-sanitize@1.6.1",
		"angular-schema-form": "github:json-schema-form/angular-schema-form@0.8.13",
		"angular-schema-form-bootstrap": "github:json-schema-form/angular-schema-form-bootstrap@0.2.0",
		"angular-schema-form-dynamic-select": "github:OptimalBPM/angular-schema-form-dynamic-select@0.15.0",
		"angular-strap": "github:mgcrea/angular-strap@2.3.12",
		"angular-touch": "github:angular/bower-angular-touch@1.6.1",
		"angular-ui-select": "github:angular-ui/ui-select@0.18.1",
		"angular-ui-tree": "github:angular-ui-tree/angular-ui-tree@2.22.2",
		"angular-ui/ui-ace": "github:angular-ui/ui-ace@0.2.3",
		"bootstrap": "github:twbs/bootstrap@3.3.7",
		"bootstrap3-dialog": "github:nakupanda/bootstrap3-dialog@1.35.3",
		"core-js": "npm:core-js@2.4.1",
		"@angular/forms": "npm:@angular/forms@0.2.0",
		"@angular/common": "npm:@angular/common@2.4.5",
		"@angular/compiler": "npm:@angular/compiler@2.4.5",
		"@angular/core": "npm:@angular/core@2.4.5",
		"@angular/platform-browser": "npm:@angular/platform-browser@2.4.5",
		"@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.4.5",
		"assert": "npm:jspm-nodelibs-assert@0.2.0",
		"buffer": "npm:jspm-nodelibs-buffer@0.2.1",
		"child_process": "npm:jspm-nodelibs-child_process@0.2.0",
		"constants": "npm:jspm-nodelibs-constants@0.2.0",
		"crypto": "npm:jspm-nodelibs-crypto@0.2.0",
		"debug": "npm:debug@2.2.0",
		"events": "npm:jspm-nodelibs-events@0.2.0",
		"font-awesome": "npm:font-awesome@4.7.0",
		"fs": "npm:jspm-nodelibs-fs@0.2.0",
		"jquery": "npm:jquery@3.1.1",
		"module": "npm:jspm-nodelibs-module@0.2.0",
		"net": "npm:jspm-nodelibs-net@0.2.0",
		"networknt/angular-schema-form-ui-ace": "github:networknt/angular-schema-form-ui-ace@0.1.2",
		"objectpath": "npm:objectpath@1.2.1",
		"os": "npm:jspm-nodelibs-os@0.2.0",
		"path": "npm:jspm-nodelibs-path@0.2.1",
		"plugin-babel": "npm:systemjs-plugin-babel@0.0.19",
		"plugin-typescript": "github:frankwallis/plugin-typescript@6.0.1",
		"process": "npm:jspm-nodelibs-process@0.2.0",
		"reflect-metadata": "npm:reflect-metadata@0.1.3",
		"rxjs": "npm:rxjs@5.0.3",
		"stream": "npm:jspm-nodelibs-stream@0.2.0",
		"string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
		"timers": "npm:jspm-nodelibs-timers@0.2.0",
		"ts": "github:frankwallis/plugin-typescript@6.0.1",
		"tv4": "npm:tv4@1.2.7",
		"typescript": "npm:typescript@2.1.5",
		"util": "npm:jspm-nodelibs-util@0.2.1",
		"vm": "npm:jspm-nodelibs-vm@0.2.0",
		"zone.js": "npm:zone.js@0.7.6"
	},
	packages: {
		"npm:crypto-browserify@3.11.0": {
			"map": {
				"browserify-cipher": "npm:browserify-cipher@1.0.0",
				"public-encrypt": "npm:public-encrypt@4.0.0",
				"create-hmac": "npm:create-hmac@1.1.4",
				"create-hash": "npm:create-hash@1.1.2",
				"randombytes": "npm:randombytes@2.0.3",
				"pbkdf2": "npm:pbkdf2@3.0.9",
				"inherits": "npm:inherits@2.0.3",
				"browserify-sign": "npm:browserify-sign@4.0.0",
				"create-ecdh": "npm:create-ecdh@4.0.0",
				"diffie-hellman": "npm:diffie-hellman@5.0.2"
			}
		},
		"npm:stream-browserify@2.0.1": {
			"map": {
				"readable-stream": "npm:readable-stream@2.2.2",
				"inherits": "npm:inherits@2.0.3"
			}
		},
		"npm:create-hash@1.1.2": {
			"map": {
				"inherits": "npm:inherits@2.0.3",
				"sha.js": "npm:sha.js@2.4.8",
				"ripemd160": "npm:ripemd160@1.0.1",
				"cipher-base": "npm:cipher-base@1.0.3"
			}
		},
		"npm:create-hmac@1.1.4": {
			"map": {
				"create-hash": "npm:create-hash@1.1.2",
				"inherits": "npm:inherits@2.0.3"
			}
		},
		"npm:public-encrypt@4.0.0": {
			"map": {
				"create-hash": "npm:create-hash@1.1.2",
				"randombytes": "npm:randombytes@2.0.3",
				"browserify-rsa": "npm:browserify-rsa@4.0.1",
				"bn.js": "npm:bn.js@4.11.6",
				"parse-asn1": "npm:parse-asn1@5.0.0"
			}
		},
		"npm:browserify-cipher@1.0.0": {
			"map": {
				"browserify-aes": "npm:browserify-aes@1.0.6",
				"evp_bytestokey": "npm:evp_bytestokey@1.0.0",
				"browserify-des": "npm:browserify-des@1.0.0"
			}
		},
		"npm:browserify-sign@4.0.0": {
			"map": {
				"browserify-rsa": "npm:browserify-rsa@4.0.1",
				"create-hash": "npm:create-hash@1.1.2",
				"create-hmac": "npm:create-hmac@1.1.4",
				"inherits": "npm:inherits@2.0.3",
				"bn.js": "npm:bn.js@4.11.6",
				"parse-asn1": "npm:parse-asn1@5.0.0",
				"elliptic": "npm:elliptic@6.3.2"
			}
		},
		"npm:create-ecdh@4.0.0": {
			"map": {
				"bn.js": "npm:bn.js@4.11.6",
				"elliptic": "npm:elliptic@6.3.2"
			}
		},
		"npm:browserify-aes@1.0.6": {
			"map": {
				"cipher-base": "npm:cipher-base@1.0.3",
				"create-hash": "npm:create-hash@1.1.2",
				"evp_bytestokey": "npm:evp_bytestokey@1.0.0",
				"inherits": "npm:inherits@2.0.3",
				"buffer-xor": "npm:buffer-xor@1.0.3"
			}
		},
		"npm:browserify-des@1.0.0": {
			"map": {
				"cipher-base": "npm:cipher-base@1.0.3",
				"inherits": "npm:inherits@2.0.3",
				"des.js": "npm:des.js@1.0.0"
			}
		},
		"npm:evp_bytestokey@1.0.0": {
			"map": {
				"create-hash": "npm:create-hash@1.1.2"
			}
		},
		"npm:browserify-rsa@4.0.1": {
			"map": {
				"bn.js": "npm:bn.js@4.11.6",
				"randombytes": "npm:randombytes@2.0.3"
			}
		},
		"npm:parse-asn1@5.0.0": {
			"map": {
				"browserify-aes": "npm:browserify-aes@1.0.6",
				"create-hash": "npm:create-hash@1.1.2",
				"evp_bytestokey": "npm:evp_bytestokey@1.0.0",
				"pbkdf2": "npm:pbkdf2@3.0.9",
				"asn1.js": "npm:asn1.js@4.9.1"
			}
		},
		"npm:diffie-hellman@5.0.2": {
			"map": {
				"bn.js": "npm:bn.js@4.11.6",
				"randombytes": "npm:randombytes@2.0.3",
				"miller-rabin": "npm:miller-rabin@4.0.0"
			}
		},
		"npm:des.js@1.0.0": {
			"map": {
				"inherits": "npm:inherits@2.0.3",
				"minimalistic-assert": "npm:minimalistic-assert@1.0.0"
			}
		},
		"npm:miller-rabin@4.0.0": {
			"map": {
				"bn.js": "npm:bn.js@4.11.6",
				"brorand": "npm:brorand@1.0.6"
			}
		},
		"npm:hash.js@1.0.3": {
			"map": {
				"inherits": "npm:inherits@2.0.3"
			}
		},
		"npm:debug@2.2.0": {
			"map": {
				"ms": "npm:ms@0.7.1"
			}
		},
		"github:twbs/bootstrap@3.3.7": {
			"map": {
				"jquery": "npm:jquery@2.2.4"
			}
		},
		"github:OptimalBPM/angular-schema-form-dynamic-select@0.15.0": {
			"map": {
				"angular-schema-form-bootstrap": "github:json-schema-form/angular-schema-form-bootstrap@0.2.0",
				"angular-strap": "github:mgcrea/angular-strap@2.3.12",
				"angular-schema-form": "github:json-schema-form/angular-schema-form@0.8.13",
				"angular-ui-select": "github:angular-ui/ui-select@0.18.1",
				"bootstrap": "github:twbs/bootstrap@3.3.7"
			}
		},
		"npm:readable-stream@2.2.2": {
			"map": {
				"string_decoder": "npm:string_decoder@0.10.31",
				"inherits": "npm:inherits@2.0.3",
				"isarray": "npm:isarray@1.0.0",
				"core-util-is": "npm:core-util-is@1.0.2",
				"buffer-shims": "npm:buffer-shims@1.0.0",
				"util-deprecate": "npm:util-deprecate@1.0.2",
				"process-nextick-args": "npm:process-nextick-args@1.0.7"
			}
		},
		"npm:font-awesome@4.7.0": {
			"map": {
				"css": "github:systemjs/plugin-css@0.1.32"
			}
		},
		"npm:buffer@4.9.1": {
			"map": {
				"base64-js": "npm:base64-js@1.2.0",
				"ieee754": "npm:ieee754@1.1.8",
				"isarray": "npm:isarray@1.0.0"
			}
		},
		"github:nakupanda/bootstrap3-dialog@1.35.3": {
			"map": {
				"bootstrap": "github:twbs/bootstrap@3.3.7"
			}
		},
		"npm:pbkdf2@3.0.9": {
			"map": {
				"create-hmac": "npm:create-hmac@1.1.4"
			}
		},
		"npm:sha.js@2.4.8": {
			"map": {
				"inherits": "npm:inherits@2.0.3"
			}
		},
		"npm:cipher-base@1.0.3": {
			"map": {
				"inherits": "npm:inherits@2.0.3"
			}
		},
		"npm:elliptic@6.3.2": {
			"map": {
				"bn.js": "npm:bn.js@4.11.6",
				"inherits": "npm:inherits@2.0.3",
				"hash.js": "npm:hash.js@1.0.3",
				"brorand": "npm:brorand@1.0.6"
			}
		},
		"github:angular/bower-angular-sanitize@1.6.1": {
			"map": {
				"angular": "github:angular/bower-angular@1.6.1"
			}
		},
		"github:angular/bower-angular-animate@1.6.1": {
			"map": {
				"angular": "github:angular/bower-angular@1.6.1"
			}
		},
		"github:angular/bower-angular-touch@1.6.1": {
			"map": {
				"angular": "github:angular/bower-angular@1.6.1"
			}
		},
		"github:angular/bower-angular-cookies@1.6.1": {
			"map": {
				"angular": "github:angular/bower-angular@1.6.1"
			}
		},
		"npm:asn1.js@4.9.1": {
			"map": {
				"bn.js": "npm:bn.js@4.11.6",
				"inherits": "npm:inherits@2.0.3",
				"minimalistic-assert": "npm:minimalistic-assert@1.0.0"
			}
		},
		"npm:timers-browserify@1.4.2": {
			"map": {
				"process": "npm:process@0.11.9"
			}
		},
		"npm:rxjs@5.0.3": {
			"map": {
				"symbol-observable": "npm:symbol-observable@1.0.4"
			}
		},
		"npm:jspm-nodelibs-crypto@0.2.0": {
			"map": {
				"crypto-browserify": "npm:crypto-browserify@3.11.0"
			}
		},
		"npm:jspm-nodelibs-os@0.2.0": {
			"map": {
				"os-browserify": "npm:os-browserify@0.2.1"
			}
		},
		"npm:jspm-nodelibs-timers@0.2.0": {
			"map": {
				"timers-browserify": "npm:timers-browserify@1.4.2"
			}
		},
		"npm:jspm-nodelibs-stream@0.2.0": {
			"map": {
				"stream-browserify": "npm:stream-browserify@2.0.1"
			}
		},
		"npm:jspm-nodelibs-string_decoder@0.2.0": {
			"map": {
				"string_decoder-browserify": "npm:string_decoder@0.10.31"
			}
		},
		"npm:jspm-nodelibs-buffer@0.2.1": {
			"map": {
				"buffer": "npm:buffer@4.9.1"
			}
		},
		"github:mgcrea/angular-strap@2.3.12": {
			"map": {
				"angular": "github:angular/bower-angular@1.6.1"
			}
		},
		"github:frankwallis/plugin-typescript@6.0.1": {
			"map": {
				"typescript": "npm:typescript@2.1.5"
			}
		},
		"npm:typescript@2.1.5": {
			"map": {
				"source-map-support": "npm:source-map-support@0.4.11"
			}
		},
		"npm:source-map-support@0.4.11": {
			"map": {
				"source-map": "npm:source-map@0.5.6"
			}
		}
	}
});
