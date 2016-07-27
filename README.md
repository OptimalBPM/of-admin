# The administrative interface plugin

The Optimal Framework admin interface is a hybrid Angular 1/Angular 2 and SystemJS/JSPM-based TypeScript web application.
Its most important function is to expose the tree that keeps all settings and entities that matter to the configuration of the framework.

It is thought of as being the starting point of an administrative interface to any system that is build upon the framework.
Hence, it is build to be easily extended.


## Documentation
The documentation of the admin plugin; API, how to extend it, is in the [repository wiki](https://github.com/OptimalBPM/of-admin/wiki).

## Installing

Just clone this repository into the plugins-folder.
```sh
git clone https://github.com/OptimalBPM/of-admin.git admin
```

## Requirements:

Note, as the source installation uses npm and jspm, there are certain memory requirements.
For example, the host needs about 800 megabytes of *free* memory to run npm and jspm properly, having less may result in strange and unnoticable errors.

