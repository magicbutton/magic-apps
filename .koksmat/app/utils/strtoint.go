package utils

import "strconv"

func StrToInt(s string) int {
	i, _ := int(strconv.ParseInt(s, 0, 64))
	return i
}
