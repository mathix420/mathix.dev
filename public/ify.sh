#! /bin/bash

OLDIFS=$IFS
IFS=$'\n'

OS_NAME=$(awk -F= '/^NAME/{print $2}' /etc/os-release | tr -d '"')
SHELL_USED=$(echo $SHELL | rev | cut -d'/' -f1 | rev)
UTILS_PATH="$HOME/mathix_utils"
RC_FILE="$HOME/.$SHELL_USED""rc"

COMMAND_LIST="alias la='ls -lAh'
alias gcl='git clone'
alias clean=\"bash $UTILS_PATH/cleaner.sh\""

if [ "$EUID" -ne 0 ]; then
    echo "Please run as root";
    exit;
fi

mkdir $UTILS_PATH 2> /dev/null
touch $RC_FILE

if [ "$OS_NAME" == "Ubuntu" ]; then
    echo "Ubuntu has been detected!";
    echo;
    apt install emacs git curl -y;
    curl "https://raw.githubusercontent.com/mathix420/ProjetStudent/master/42-Utilities/cleaner.sh" > "$UTILS_PATH/cleaner.sh"
    for item in $COMMAND_LIST; do
        if [ -z "$(grep $item $RC_FILE)" ]; then
            echo "$item" >> $RC_FILE;
        fi
    done
fi

source $RC_FILE

echo "All done! Your OS is now mathixified!"

IFS=$OLDIFS