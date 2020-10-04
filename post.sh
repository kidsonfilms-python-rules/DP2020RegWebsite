curl -X POST \
-H "Content-Type: application/json" \
-d'{
"fields": {
"Field1": {
"stringValue": "'"$var1"'"
},
"Field2": {
"stringValue": "'"$var2"'"
},
"Field3": {
"stringValue": "$var3"
}
}
}' "https://firestore.googleapis.com/v1/projects/project-delta-db6b3/databases/(default)/documents/bhogReg"
sleep 1m