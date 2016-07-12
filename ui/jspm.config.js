SystemJS.config({
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12",
      "clean-css": "npm:clean-css@3.4.18",
      "https": "github:jspm/nodelibs-https@0.2.0-alpha",
      "text": "github:systemjs/plugin-text@0.0.2",
      "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
      "ts": "github:frankwallis/plugin-typescript@4.0.16",
      "css": "github:frankwallis/plugin-css@master",
      "net": "github:jspm/nodelibs-net@0.2.0-alpha",
      "url": "github:jspm/nodelibs-url@0.2.0-alpha",
      "module": "github:jspm/nodelibs-module@0.2.0-alpha",
      "http": "github:jspm/nodelibs-http@0.2.0-alpha",
      "os": "github:jspm/nodelibs-os@0.2.0-alpha"
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
          "amdefine": "npm:amdefine@1.0.0"
        }
      },
      "github:frankwallis/plugin-typescript@4.0.16": {
        "map": {
          "typescript": "npm:typescript@1.8.10"
        }
      },
      "npm:commander@2.8.1": {
        "map": {
          "graceful-readlink": "npm:graceful-readlink@1.0.1"
        }
      },
      "github:jspm/nodelibs-url@0.2.0-alpha": {
        "map": {
          "url-browserify": "npm:url@0.11.0"
        }
      },
      "npm:url@0.11.0": {
        "map": {
          "querystring": "npm:querystring@0.2.0",
          "punycode": "npm:punycode@1.3.2"
        }
      },
      "github:jspm/nodelibs-http@0.2.0-alpha": {
        "map": {
          "http-browserify": "npm:stream-http@2.3.0"
        }
      },
      "github:jspm/nodelibs-os@0.2.0-alpha": {
        "map": {
          "os-browserify": "npm:os-browserify@0.2.1"
        }
      },
      "npm:stream-http@2.3.0": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "readable-stream": "npm:readable-stream@2.1.4",
          "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
          "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
          "xtend": "npm:xtend@4.0.1"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  typescriptOptions: {
    "module": "system",
    "target": "es5",
    "typeCheck": "strict",
    "tsconfig": true,
    "sourceMap": true,
    "removeComments": false,
    "supportHtmlImports": true
  },
  packages: {
    "/admin": {
      "main": "main",
      "format": "system",
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
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "@angular/upgrade": "npm:@angular/upgrade@2.0.0-rc.4",
    "OptimalBPM/angular-schema-form-complex-ui": "github:OptimalBPM/angular-schema-form-complex-ui@master",
    "ace": "github:ajaxorg/ace-builds@1.2.3",
    "ace-builds": "npm:ace-builds@1.2.2",
    "angular": "github:angular/bower-angular@1.5.7",
    "angular-animate": "github:angular/bower-angular-animate@1.5.7",
    "angular-cookies": "github:angular/bower-angular-cookies@1.5.7",
    "angular-sanitize": "github:angular/bower-angular-sanitize@1.5.7",
    "angular-schema-form": "github:json-schema-form/angular-schema-form@0.8.13",
    "angular-schema-form-bootstrap": "github:json-schema-form/angular-schema-form-bootstrap@0.2.0",
    "angular-schema-form-dynamic-select": "github:OptimalBPM/angular-schema-form-dynamic-select@0.15.0",
    "angular-strap": "github:mgcrea/angular-strap@2.3.9",
    "angular-touch": "github:angular/bower-angular-touch@1.5.7",
    "angular-ui-select": "github:angular-ui/ui-select@0.18.1",
    "angular-ui-tree": "github:angular-ui-tree/angular-ui-tree@2.17.0",
    "angular-ui/ui-ace": "github:angular-ui/ui-ace@0.2.3",
    "bootstrap3-dialog": "github:nakupanda/bootstrap3-dialog@1.35.2",
    "core-js": "npm:core-js@2.4.0",
    "@angular/forms": "npm:@angular/forms@0.2.0",
    "@angular/common": "npm:@angular/common@2.0.0-rc.4",
    "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.4",
    "@angular/core": "npm:@angular/core@2.0.0-rc.4",
    "@angular/http": "npm:@angular/http@2.0.0-rc.4",
    "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.4",
    "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.0.0-rc.4",
    "@angular/router": "npm:@angular/router@3.0.0-beta.2",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "debug": "npm:debug@2.2.0",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "font-awesome": "npm:font-awesome@4.6.3",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "jquery": "npm:jquery@3.1.0",
    "networknt/angular-schema-form-ui-ace": "github:networknt/angular-schema-form-ui-ace@0.1.2",
    "objectpath": "npm:objectpath@1.2.1",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "reflect-metadata": "npm:reflect-metadata@0.1.3",
    "rxjs": "npm:rxjs@5.0.0-beta.6",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "tv4": "npm:tv4@1.2.7",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "zone.js": "npm:zone.js@0.6.12"
  },
  packages: {
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "create-hmac": "npm:create-hmac@1.1.4",
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "inherits": "npm:inherits@2.0.1",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.4",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:readable-stream@2.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "string_decoder": "npm:string_decoder@0.10.31",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "core-util-is": "npm:core-util-is@1.0.2",
        "isarray": "npm:isarray@1.0.0",
        "buffer-shims": "npm:buffer-shims@1.0.0"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "sha.js": "npm:sha.js@2.4.5",
        "ripemd160": "npm:ripemd160@1.0.1",
        "cipher-base": "npm:cipher-base@1.0.2"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.4",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
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
        "inherits": "npm:inherits@2.0.1",
        "bn.js": "npm:bn.js@4.11.4",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "elliptic": "npm:elliptic@6.3.1"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.4",
        "elliptic": "npm:elliptic@6.3.1"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.1",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "inherits": "npm:inherits@2.0.1",
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
        "bn.js": "npm:bn.js@4.11.4",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "asn1.js": "npm:asn1.js@4.8.0"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.4",
        "randombytes": "npm:randombytes@2.0.3",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:elliptic@6.3.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.4",
        "inherits": "npm:inherits@2.0.1",
        "hash.js": "npm:hash.js@1.0.3",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.7.0"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.4",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:buffer@4.7.0": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "ieee754": "npm:ieee754@1.1.6",
        "base64-js": "npm:base64-js@1.1.2"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:asn1.js@4.8.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.4",
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "github:nakupanda/bootstrap3-dialog@1.35.2": {
      "map": {
        "bootstrap": "github:twbs/bootstrap@3.3.6"
      }
    },
    "github:twbs/bootstrap@3.3.6": {
      "map": {
        "jquery": "npm:jquery@2.2.4"
      }
    },
    "github:OptimalBPM/angular-schema-form-dynamic-select@0.15.0": {
      "map": {
        "angular-schema-form-bootstrap": "github:json-schema-form/angular-schema-form-bootstrap@0.2.0",
        "angular-strap": "github:mgcrea/angular-strap@2.3.9",
        "angular-schema-form": "github:json-schema-form/angular-schema-form@0.8.13",
        "angular-ui-select": "github:angular-ui/ui-select@0.18.1",
        "bootstrap": "github:twbs/bootstrap@3.3.6"
      }
    },
    "github:mgcrea/angular-strap@2.3.9": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.7"
      }
    },
    "github:angular/bower-angular-animate@1.5.7": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.7"
      }
    },
    "npm:font-awesome@4.6.3": {
      "map": {
        "css": "github:systemjs/plugin-css@0.1.23"
      }
    },
    "github:angular/bower-angular-cookies@1.5.7": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.7"
      }
    },
    "github:angular/bower-angular-sanitize@1.5.7": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.7"
      }
    },
    "github:angular/bower-angular-touch@1.5.7": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.7"
      }
    }
  }
});
