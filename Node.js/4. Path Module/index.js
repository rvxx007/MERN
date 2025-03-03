// The path module provides utilities for working with file and directory paths. It can be accessed using:
// const path = require('path');
// The path module provides the following methods to work with file paths:
// path.basename() - returns the last portion of a path
// path.delimiter - provides the platform-specific path delimiter
// path.dirname() - returns the directory name of a path
// path.extname() - returns the file extension of a path
// path.format() - returns a path string from an object
// path.isAbsolute() - determines if a path is an absolute path
// path.join() - joins multiple path segments together
// path.normalize() - normalizes a path
// path.parse() - returns an object from a path string
// path.posix - provides access to POSIX specific implementations of path methods
// path.relative() - returns the relative path from one path to another
// path.resolve() - resolves an absolute path
// path.sep - provides the platform-specific path segment separator
// path.win32 - provides access to Windows specific implementations of path methods

const path = require('path');

// Example 1: path.basename()
// The path.basename() method returns the last portion of a path, similar to the Unix basename command.
// Syntax
// path.basename(path[, ext])
// Parameters: 
// path: A string representing the path to a file or directory.
// ext: A string representing the file extension.
// Return value:
// The last portion of a path.
// Example
// In the following example, the path.basename() method returns the last portion of a path.
console.log(path.basename('/Node.js/4.%20Path%20Module/index.js'));
// Output: index.js 

// Example 2: path.delimiter
// The path.delimiter property provides the platform-specific path delimiter.
// Syntax
// path.delimiter
// Return value:
// The platform-specific path delimiter.
// Example
// In the following example, the path.delimiter property provides the platform-specific path delimiter.
console.log(path.delimiter);
// Output: : (on Unix-like systems)


// Example 3: path.dirname()
// The path.dirname() method returns the directory name of a path.
// Syntax
// path.dirname(path)
// Parameters:
// path: A string representing the path to a file or directory.
// Return value:
// The directory name of a path.
// Example
// In the following example, the path.dirname() method returns the directory name of a path.
console.log(path.dirname('/Node.js/4.%20Path%20Module/index.js'));
// Output: /Node.js/4.%20Path%20Module


// Example 4: path.extname()
// The path.extname() method returns the file extension of a path.
// Syntax
// path.extname(path)
// Parameters:
// path: A string representing the path to a file.
// Return value:
// The file extension of a path.
// Example
// In the following example, the path.extname() method returns the file extension of a path.
console.log(path.extname('/Node.js/4.%20Path%20Module/index.js'));
// Output: .js


// Example 5: path.format()
// The path.format() method returns a path string from an object.
// Syntax
// path.format(pathObject)
// Parameters:
// pathObject: An object containing path properties.
// Return value:
// A path string from an object.
// Example
// In the following example, the path.format() method returns a path string from an object.
console.log(path.format({
  dir: '/Node.js/4.%20Path%20Module',
  base: 'index.js'
}));
// Output: /Node.js/4.%20Path%20Module


// Example 6: path.isAbsolute()
// The path.isAbsolute() method determines if a path is an absolute path.
// Syntax
// path.isAbsolute(path)
// Parameters:
// path: A string representing the path to a file or directory.
// Return value:
// true if the path is an absolute path; otherwise, false.
// Example
// In the following example, the path.isAbsolute() method determines if a path is an absolute path.
console.log(path.isAbsolute('/Node.js/4.%20Path%20Module/index.js'));
// Output: true 


// Example 7: path.join()
// The path.join() method joins multiple path segments together.
// Syntax
// path.join([...paths])
// Parameters:
// paths: A sequence of path segments.
// Return value:
// A path string.
// Example
// In the following example, the path.join() method joins multiple path segments together.
console.log(path.join('/Node.js', '4.%20Path%20Module', 'index.js'));
// Output: /Node.js/4.%20Path%20Module/index.js 


// Example 8: path.normalize()
// The path.normalize() method normalizes a path.
// Syntax
// path.normalize(path)
// Parameters:
// path: A string representing the path to a file or directory.
// Return value:
// A normalized path.
// Example
// In the following example, the path.normalize() method normalizes a path.
console.log(path.normalize('/Node.js/4.%20Path%20Module/index.js'));
// Output: /Node.js/4.%20Path%20Module/index.js


// Example 9: path.parse()
// The path.parse() method returns an object from a path string.
// Syntax
// path.parse(path)
// Parameters:
// path: A string representing the path to a file or directory.
// Return value:
// An object containing path properties.
// Example
// In the following example, the path.parse() method returns an object from a path string.
console.log(path.parse('/Node.js/4.%20Path%20Module/index.js'));
// Output: { root: '/',
//   dir: '/Node.js/4.%20Path%20Module',
//   base: 'index.js',
//   ext: '.js',
//   name: 'index' }


// Example 10: path.relative()
// The path.relative() method returns the relative path from one path to another.
// Syntax
// path.relative(from, to)
// Parameters:
// from: A string representing the starting path.
// to: A string representing the target path.
// Return value:
// The relative path from one path to another.
// Example
// In the following example, the path.relative() method returns the relative path from one path to another.
console.log(path.relative('/Node.js/4.%20Path%20Module', '/Node.js/4.%20Path%20Module/index.js'));
// Output: index.js


// Example 11: path.resolve()
// The path.resolve() method resolves an absolute path.
// Syntax
// path.resolve([...paths])
// Parameters:
// paths: A sequence of path segments.
// Return value:
// An absolute path.
// Example
// In the following example, the path.resolve() method resolves an absolute path.
console.log(path.resolve('/Node.js/4.%20Path%20Module', 'index.js'));
// Output: /Node.js/4.%20Path%20Module


// Example 12: path.sep
// The path.sep property provides the platform-specific path segment separator.
// Syntax
// path.sep
// Return value:
// The platform-specific path segment separator.
// Example
// In the following example, the path.sep property provides the platform-specific path segment separator.
console.log(path.sep);
// Output: / (on Unix-like systems)


// Example 13: path.win32
// The path.win32 property provides access to Windows specific implementations of path methods.
// Syntax
// path.win32
// Return value:
// Windows specific implementations of path methods.
// Example
// In the following example, the path.win32 property provides access to Windows specific implementations of path methods.
console.log(path.win32);
// Output: {
//   basename: [Function: basename],
//   delimiter: ';',
//   dirname: [Function: dirname],
//   extname: [Function: extname],
//   format: [Function: format],
//   isAbsolute: [Function: isAbsolute],
//   join: [Function: join],
//   normalize: [Function: normalize],
//   parse: [Function: parse],
//   relative: [Function: relative],
//   resolve: [Function: resolve],
//   sep: '\\'
// }

// Example 14: path.posix
// The path.posix property provides access to POSIX specific implementations of path methods.
// Syntax
// path.posix
// Return value:
// POSIX specific implementations of path methods.
// Example
// In the following example, the path.posix property provides access to POSIX specific implementations of path methods.
console.log(path.posix);
// Output: {
//   basename: [Function: basename],
//   delimiter: ':',
//   dirname: [Function: dirname],
//   extname: [Function: extname],
//   format: [Function: format],
//   isAbsolute: [Function: isAbsolute],
//   join: [Function: join],
//   normalize: [Function: normalize],
//   parse: [Function: parse],
//   relative: [Function: relative],
//   resolve: [Function: resolve],
//   sep: '/'
// }
// In this example, the path.posix property provides access to POSIX specific implementations of path methods.
// The path module provides utilities for working with file and directory paths in Node.js. It can be accessed using require('path'). It provides methods for working with file paths, such as path.basename(), path.dirname(), path.extname(), path.join(), and many more. The path module also provides platform-specific properties such as path.delimiter, path.sep, path.win32, and path.posix. You can use these methods and properties to work with file paths in your Node.js applications.

