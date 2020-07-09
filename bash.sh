#! /bin/bash

function readFile(){
	while read line
	do
		echo $line
	done < data.txt
}
function addRow(){
	dem=0
	while read line; do
		let dem++
	done < data.txt
	let dem++

	read -p "Ho ten " name
	read -p "Tuoi " age
	echo $dem " " $name " " $age >> data.txt
}
function findName(){
	read -p "Ten muon tin: " name
	line=`grep -c $name data.txt`
	if [[ line -gt 0 ]]; then
		return 1
	else
		return 0
	fi
}

function menu(){
	echo "1. Show data"
	echo "2. Add Row"
	echo "3. Find name"
	echo "0. Exit"
	read -p "Lua chon " op
	if [[ op -eq 1 ]]; then
		readFile
		menu
	elif [[ op -eq 2 ]]; then
		addRow
		menu
	elif [[ op -eq 3 ]]; then
		findName
		if [[ $? -eq 1 ]]; then
			echo Tim thay
		else
			echo Khong Thay
		fi
		menu
	elif [[ op -eq 0 ]]; then
		exit
	else
		echo "Nhap sai"
		menu
	fi

}
menu
