# File Manager

## List of operations and their syntax:

### Navigation & working directory (nwd)

#### Go upper from current directory (when you are in the root folder this operation shouldn't change working directory)

up

#### Go to dedicated folder from current directory (path_to_directory can be relative or absolute)

cd path_to_directory

#### Print in console list of all files and folders in current directory. List should contain:

- list should contain files and folder names (for files - with extension)
- folders and files are sorted in alphabetical order ascending, but list of folders goes first
- type of directory content should be marked explicitly (e.g. as a corresponding column value)
  ls

### Basic operations with files

#### Read file and print it's content in console (should be done using Readable stream):

cat path_to_file

#### Create empty file in current working directory:

add new_file_name

#### Rename file (content should remain unchanged):

rn path_to_file new_filename

#### Copy file (should be done using Readable and Writable streams):

cp path_to_file path_to_new_directory

#### Move file (same as copy but initial file is deleted, copying part should be done using Readable and Writable streams):

mv path_to_file path_to_new_directory

#### Delete file:

rm path_to_file

### Operating system info (prints following information in console)

#### Get EOL (default system End-Of-Line) and print it to console

os --EOL

#### Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them) and print it to console

os --cpus

#### Get home directory and print it to console

os --homedir

#### Get current system user name (Do not confuse with the username that is set when the application starts) and print it to console

os --username

#### Get CPU architecture for which Node.js binary has compiled and print it to console

os --architecture

### Hash calculation

#### Calculate hash for file and print it into console

hash path_to_file

### Compress and decompress operations

#### Compress file (using Brotli algorithm, should be done using Streams API)

compress path_to_file path_to_destination

#### Decompress file (using Brotli algorithm, should be done using Streams API)

decompress path_to_file path_to_destination
