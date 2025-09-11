# To Continue. 

###Required Binaries for Android Toolchain
​To complete the setup of a command-line Android development environment on an arm64-v8a device, you will need to acquire the following two binaries:

### ​aapt2 (Android Asset Packaging Tool 2)

​### dx (Dalvik Executable Tool)
​
These tools are essential for compiling and packaging Android resources and converting Java bytecode to the Dalvik format.

## ​Public Instructions for Acquisition
​
Since these tools are typically distributed as part of a larger development environment for desktop architectures, you will need to find pre-compiled versions that are compatible with the arm64-v8a architecture.

​To find these binaries, you can use a search engine with the following public-facing queries:

### ​aapt2 binary arm64
​
### dx binary android arm64-v8a
​
### android sdk build-tools arm64

​These searches will lead you to various community-maintained repositories and projects that have compiled these specific versions of the tools for the correct architecture.

​Once you have located and downloaded the binaries, you should place both the **aapt2** and **dx** files into the **build-tools/34.0.0/* directory that you have already created for other tools. 

This will ensure they are in the correct location for the build process.
