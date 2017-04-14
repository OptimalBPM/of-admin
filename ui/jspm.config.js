SystemJS.config({
	devConfig: {
		"map": {
			"clean-css": "npm:clean-css@3.0.10",
			"text": "github:systemjs/plugin-text@0.0.2",
			"css": "github:frankwallis/plugin-css@master",
			"http": "npm:jspm-nodelibs-http@0.2.0",
			"https": "npm:jspm-nodelibs-https@0.2.2",
			"url": "npm:jspm-nodelibs-url@0.2.1"
		},
		"packages": {
			"npm:clean-css@3.0.10": {
				"map": {
					"source-map": "npm:source-map@0.1.43",
					"commander": "npm:commander@2.5.1"
				}
			},
			"npm:jspm-nodelibs-url@0.2.1": {
				"map": {
					"url": "npm:url@0.11.0"
				}
			},
			"npm:jspm-nodelibs-http@0.2.0": {
				"map": {
					"http-browserify": "npm:stream-http@2.6.3"
				}
			},
			"npm:source-map@0.1.43": {
				"map": {
					"amdefine": "npm:amdefine@1.0.1"
				}
			},
			"npm:stream-http@2.6.3": {
				"map": {
					"xtend": "npm:xtend@4.0.1",
					"builtin-status-codes": "npm:builtin-status-codes@3.0.0",
					"inherits": "npm:inherits@2.0.3",
					"to-arraybuffer": "npm:to-arraybuffer@1.0.1",
					"readable-stream": "npm:readable-stream@2.2.6"
				}
			},
			"npm:url@0.11.0": {
				"map": {
					"punycode": "npm:punycode@1.3.2",
					"querystring": "npm:querystring@0.2.0"
				}
			}
		}
	},
	transpiler: "ts",
	typescriptOptions: {
		"sourceMap": true,
		"removeComments": false,
		"target": "es5",
		"module": "system",
		"experimentalDecorators": true
	},
	packages: {
		"/admin": {
			"main": "main",
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
			}
		}
	},
	meta: {
		"*.css": {
			"loader": "css"
		},
		"npm:@angular/core@2.4.10/bundles/core.umd.js": {
			"esModule": true
		},

		"npm:@angular/common@2.4.10/bundles/common.umd.js": {
			"esModule": true
		},
		"npm:@angular/compiler@2.4.10/bundles/compiler.umd.js": {
			"esModule": true
		},
		"npm:@angular/forms@2.4.10/bundles/forms.umd.js": {
			"esModule": true
		},
		"npm:@angular/http@2.4.10/bundles/http.umd.js": {
			"esModule": true
		},
		"npm:@angular/platform-browser-dynamic@2.4.10/bundles/platform-browser-dynamic.umd.js": {
			"esModule": true
		},
		"npm:@angular/platform-browser@2.4.10/bundles/platform-browser.umd.js": {
			"esModule": true
		},
		"npm:@angular/router@3.4.10/bundles/router.umd.js": {
			"esModule": true
		},
		"npm:@angular/upgrade@2.4.10/bundles/upgrade.umd.js": {
			"esModule": true
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
		"@angular/common": "npm:@angular/common@2.4.10",
		"@angular/compiler": "npm:@angular/compiler@2.4.10",
		"@angular/core": "npm:@angular/core@2.4.10",
		"@angular/forms": "npm:@angular/forms@2.4.10",
		"@angular/http": "npm:@angular/http@2.4.10",
		"@angular/platform-browser": "npm:@angular/platform-browser@2.4.10",
		"@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.4.10",
		"@angular/router": "npm:@angular/router@3.4.10",
		"@angular/upgrade": "npm:@angular/upgrade@2.4.10",
		"OptimalBPM/angular-schema-form-complex-ui": "github:OptimalBPM/angular-schema-form-complex-ui@master",
		"ace": "github:ajaxorg/ace-builds@1.2.6",
		"ace-builds": "npm:ace-builds@1.2.6",
		"angular": "github:angular/bower-angular@1.6.3",
		"angular-animate": "github:angular/bower-angular-animate@1.6.3",
		"angular-cookies": "github:angular/bower-angular-cookies@1.6.3",
		"angular-sanitize": "github:angular/bower-angular-sanitize@1.6.3",
		"angular-schema-form": "github:json-schema-form/angular-schema-form@0.8.13",
		"angular-schema-form-bootstrap": "github:json-schema-form/angular-schema-form-bootstrap@0.2.0",
		"angular-schema-form-dynamic-select": "github:OptimalBPM/angular-schema-form-dynamic-select@0.15.0",
		"angular-strap": "github:mgcrea/angular-strap@2.3.12",
		"angular-touch": "github:angular/bower-angular-touch@1.6.3",
		"angular-ui-select": "github:angular-ui/ui-select@0.18.1",
		"angular-ui-tree": "github:angular-ui-tree/angular-ui-tree@2.22.5",
		"angular-ui/ui-ace": "github:angular-ui/ui-ace@0.2.3",
		"assert": "npm:jspm-nodelibs-assert@0.2.1",
		"bootstrap": "github:twbs/bootstrap@3.3.7",
		"bootstrap3-dialog": "github:nakupanda/bootstrap3-dialog@1.35.4",
		"buffer": "npm:jspm-nodelibs-buffer@0.2.2",
		"child_process": "npm:jspm-nodelibs-child_process@0.2.1",
		"constants": "npm:jspm-nodelibs-constants@0.2.1",
		"crypto": "npm:jspm-nodelibs-crypto@0.2.1",
		"debug": "npm:debug@2.2.0",
		"events": "npm:jspm-nodelibs-events@0.2.2",
		"font-awesome": "npm:font-awesome@4.7.0",
		"frankwallis/plugin-typescript": "github:frankwallis/plugin-typescript@7.0.5",
		"fs": "npm:jspm-nodelibs-fs@0.2.1",
		"jquery": "npm:jquery@3.2.1",
		"module": "npm:jspm-nodelibs-module@0.2.1",
		"net": "npm:jspm-nodelibs-net@0.2.1",
		"networknt/angular-schema-form-ui-ace": "github:networknt/angular-schema-form-ui-ace@0.1.2",
		"objectpath": "npm:objectpath@1.2.1",
		"os": "npm:jspm-nodelibs-os@0.2.1",
		"path": "npm:jspm-nodelibs-path@0.2.3",
		"plugin-typescript": "github:frankwallis/plugin-typescript@7.0.5",
		"process": "npm:jspm-nodelibs-process@0.2.1",
		"reflect-metadata": "npm:reflect-metadata@0.1.10",
		"rxjs": "npm:rxjs@5.2.0",
		"stream": "npm:jspm-nodelibs-stream@0.2.1",
		"string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.1",
		"systemjs": "npm:systemjs@0.20.10",
		"timers": "npm:jspm-nodelibs-timers@0.2.1",
		"ts": "github:frankwallis/plugin-typescript@7.0.5",
		"tv4": "npm:tv4@1.3.0",
		"twbs/bootstrap": "github:twbs/bootstrap@3.3.7",
		"typeahead": "npm:typeahead@0.2.2",
		"typescript": "npm:typescript@2.2.2",
		"util": "npm:jspm-nodelibs-util@0.2.2",
		"vm": "npm:jspm-nodelibs-vm@0.2.1",
		"zone.js": "npm:zone.js@0.7.8"
	},
	packages: {
		"npm:debug@2.2.0": {
			"map": {
				"ms": "npm:ms@0.7.1"
			}
		},
		"npm:typeahead@0.2.2": {
			"map": {
				"dom": "npm:dom@0.0.2",
				"xtend": "npm:xtend@1.0.3"
			}
		},
		"npm:jspm-nodelibs-buffer@0.2.2": {
			"map": {
				"buffer": "npm:buffer@4.9.1"
			}
		},
		"npm:rxjs@5.2.0": {
			"map": {
				"symbol-observable": "npm:symbol-observable@1.0.4"
			}
		},
		"npm:jspm-nodelibs-os@0.2.1": {
			"map": {
				"os-browserify": "npm:os-browserify@0.2.1"
			}
		},
		"github:OptimalBPM/angular-schema-form-dynamic-select@0.15.0": {
			"map": {
				"angular-schema-form": "github:json-schema-form/angular-schema-form@0.8.13",
				"angular-ui-select": "github:angular-ui/ui-select@0.18.1",
				"angular-strap": "github:mgcrea/angular-strap@2.3.12",
				"angular-schema-form-bootstrap": "github:json-schema-form/angular-schema-form-bootstrap@0.2.0",
				"bootstrap": "github:twbs/bootstrap@3.3.7"
			}
		},
		"npm:readable-stream@2.2.6": {
			"map": {
				"inherits": "npm:inherits@2.0.3",
				"isarray": "npm:isarray@1.0.0",
				"buffer-shims": "npm:buffer-shims@1.0.0",
				"core-util-is": "npm:core-util-is@1.0.2",
				"string_decoder": "npm:string_decoder@0.10.31",
				"util-deprecate": "npm:util-deprecate@1.0.2",
				"process-nextick-args": "npm:process-nextick-args@1.0.7"
			}
		},
		"npm:buffer@4.9.1": {
			"map": {
				"base64-js": "npm:base64-js@1.2.0",
				"ieee754": "npm:ieee754@1.1.8",
				"isarray": "npm:isarray@1.0.0"
			}
		},
		"npm:jspm-nodelibs-crypto@0.2.1": {
			"map": {
				"crypto-browserify": "npm:crypto-browserify@3.11.0"
			}
		},
		"npm:crypto-browserify@3.11.0": {
			"map": {
				"inherits": "npm:inherits@2.0.3",
				"browserify-cipher": "npm:browserify-cipher@1.0.0",
				"create-ecdh": "npm:create-ecdh@4.0.0",
				"create-hash": "npm:create-hash@1.1.2",
				"create-hmac": "npm:create-hmac@1.1.4",
				"diffie-hellman": "npm:diffie-hellman@5.0.2",
				"pbkdf2": "npm:pbkdf2@3.0.9",
				"public-encrypt": "npm:public-encrypt@4.0.0",
				"randombytes": "npm:randombytes@2.0.3",
				"browserify-sign": "npm:browserify-sign@4.0.3"
			}
		},
		"npm:typescript@2.2.2": {
			"map": {
				"source-map-support": "npm:source-map-support@0.4.14"
			}
		},
		"npm:font-awesome@4.7.0": {
			"map": {
				"css": "github:systemjs/plugin-css@0.1.33"
			}
		},
		"npm:source-map-support@0.4.14": {
			"map": {
				"source-map": "npm:source-map@0.5.6"
			}
		},
		"npm:create-hash@1.1.2": {
			"map": {
				"inherits": "npm:inherits@2.0.3",
				"cipher-base": "npm:cipher-base@1.0.3",
				"sha.js": "npm:sha.js@2.4.8",
				"ripemd160": "npm:ripemd160@1.0.1"
			}
		},
		"npm:public-encrypt@4.0.0": {
			"map": {
				"create-hash": "npm:create-hash@1.1.2",
				"randombytes": "npm:randombytes@2.0.3",
				"bn.js": "npm:bn.js@4.11.6",
				"browserify-rsa": "npm:browserify-rsa@4.0.1",
				"parse-asn1": "npm:parse-asn1@5.1.0"
			}
		},
		"npm:pbkdf2@3.0.9": {
			"map": {
				"create-hmac": "npm:create-hmac@1.1.4"
			}
		},
		"npm:create-hmac@1.1.4": {
			"map": {
				"create-hash": "npm:create-hash@1.1.2",
				"inherits": "npm:inherits@2.0.3"
			}
		},
		"npm:browserify-sign@4.0.3": {
			"map": {
				"create-hash": "npm:create-hash@1.1.2",
				"create-hmac": "npm:create-hmac@1.1.4",
				"inherits": "npm:inherits@2.0.3",
				"bn.js": "npm:bn.js@4.11.6",
				"browserify-rsa": "npm:browserify-rsa@4.0.1",
				"parse-asn1": "npm:parse-asn1@5.1.0",
				"elliptic": "npm:elliptic@6.4.0"
			}
		},
		"npm:diffie-hellman@5.0.2": {
			"map": {
				"randombytes": "npm:randombytes@2.0.3",
				"bn.js": "npm:bn.js@4.11.6",
				"miller-rabin": "npm:miller-rabin@4.0.0"
			}
		},
		"npm:create-ecdh@4.0.0": {
			"map": {
				"bn.js": "npm:bn.js@4.11.6",
				"elliptic": "npm:elliptic@6.4.0"
			}
		},
		"npm:browserify-cipher@1.0.0": {
			"map": {
				"browserify-des": "npm:browserify-des@1.0.0",
				"browserify-aes": "npm:browserify-aes@1.0.6",
				"evp_bytestokey": "npm:evp_bytestokey@1.0.0"
			}
		},
		"github:mgcrea/angular-strap@2.3.12": {
			"map": {
				"angular": "github:angular/bower-angular@1.6.3"
			}
		},
		"npm:cipher-base@1.0.3": {
			"map": {
				"inherits": "npm:inherits@2.0.3"
			}
		},
		"npm:sha.js@2.4.8": {
			"map": {
				"inherits": "npm:inherits@2.0.3"
			}
		},
		"npm:browserify-rsa@4.0.1": {
			"map": {
				"bn.js": "npm:bn.js@4.11.6",
				"randombytes": "npm:randombytes@2.0.3"
			}
		},
		"npm:elliptic@6.4.0": {
			"map": {
				"bn.js": "npm:bn.js@4.11.6",
				"inherits": "npm:inherits@2.0.3",
				"hash.js": "npm:hash.js@1.0.3",
				"hmac-drbg": "npm:hmac-drbg@1.0.0",
				"brorand": "npm:brorand@1.1.0",
				"minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
				"minimalistic-assert": "npm:minimalistic-assert@1.0.0"
			}
		},
		"npm:parse-asn1@5.1.0": {
			"map": {
				"browserify-aes": "npm:browserify-aes@1.0.6",
				"create-hash": "npm:create-hash@1.1.2",
				"evp_bytestokey": "npm:evp_bytestokey@1.0.0",
				"pbkdf2": "npm:pbkdf2@3.0.9",
				"asn1.js": "npm:asn1.js@4.9.1"
			}
		},
		"npm:evp_bytestokey@1.0.0": {
			"map": {
				"create-hash": "npm:create-hash@1.1.2"
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
		"npm:miller-rabin@4.0.0": {
			"map": {
				"bn.js": "npm:bn.js@4.11.6",
				"brorand": "npm:brorand@1.1.0"
			}
		},
		"npm:jspm-nodelibs-timers@0.2.1": {
			"map": {
				"timers-browserify": "npm:timers-browserify@1.4.2"
			}
		},
		"npm:jspm-nodelibs-stream@0.2.1": {
			"map": {
				"stream-browserify": "npm:stream-browserify@2.0.1"
			}
		},
		"github:angular/bower-angular-animate@1.6.3": {
			"map": {
				"angular": "github:angular/bower-angular@1.6.3"
			}
		},
		"github:angular/bower-angular-cookies@1.6.3": {
			"map": {
				"angular": "github:angular/bower-angular@1.6.3"
			}
		},
		"github:angular/bower-angular-touch@1.6.3": {
			"map": {
				"angular": "github:angular/bower-angular@1.6.3"
			}
		},
		"github:angular/bower-angular-sanitize@1.6.3": {
			"map": {
				"angular": "github:angular/bower-angular@1.6.3"
			}
		},
		"npm:hash.js@1.0.3": {
			"map": {
				"inherits": "npm:inherits@2.0.3"
			}
		},
		"npm:asn1.js@4.9.1": {
			"map": {
				"bn.js": "npm:bn.js@4.11.6",
				"inherits": "npm:inherits@2.0.3",
				"minimalistic-assert": "npm:minimalistic-assert@1.0.0"
			}
		},
		"npm:hmac-drbg@1.0.0": {
			"map": {
				"hash.js": "npm:hash.js@1.0.3",
				"minimalistic-assert": "npm:minimalistic-assert@1.0.0",
				"minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
			}
		},
		"npm:des.js@1.0.0": {
			"map": {
				"inherits": "npm:inherits@2.0.3",
				"minimalistic-assert": "npm:minimalistic-assert@1.0.0"
			}
		},
		"npm:jspm-nodelibs-string_decoder@0.2.1": {
			"map": {
				"string_decoder": "npm:string_decoder@0.10.31"
			}
		},
		"npm:timers-browserify@1.4.2": {
			"map": {
				"process": "npm:process@0.11.9"
			}
		},
		"npm:stream-browserify@2.0.1": {
			"map": {
				"inherits": "npm:inherits@2.0.3",
				"readable-stream": "npm:readable-stream@2.2.6"
			}
		},
		"github:nakupanda/bootstrap3-dialog@1.35.4": {
			"map": {
				"bootstrap": "github:twbs/bootstrap@3.3.7"
			}
		},
		"github:twbs/bootstrap@3.3.7": {
			"map": {
				"jquery": "npm:jquery@3.2.1"
			}
		}
	}
});
