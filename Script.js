var NSString = ObjC.classes.NSString.alloc();
var s = NSString.initWithString_("lol\n");
s.writeToFile_atomically_("/tmp/newfile.txt", 1);
