cmd1 = InitCommand(2, 1);
	ClearMods(cmd1);
	SetModifier(cmd1, 155, "<Yes>");
	SetModifier(cmd1, 1, "Green|1");
	SetModifier(cmd1, 3, "Geometry");
	SetModifier(cmd1, 2, "Solid|0");
	gdh1 = InitDigInfo();
	AddFreeDig(gdh1, "X"+0+"Y"+0+"Z"+0);
	AddFreeDig(gdh1, "X"+100);
	AddFreeDig(gdh1, "Y"+100);
	AddFreeDig(gdh1, "X"+0);
	AddFreeDig(gdh1, "Y"+0);
	AddFinishDig(gdh1 , _FINISH);
	cmdret = ExecCommand(cmd1, gdh1);
FreeDigInfo(gdh1);