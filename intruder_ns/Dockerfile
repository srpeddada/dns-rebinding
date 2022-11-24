FROM handsonsecurity/seed-server:bind

COPY named.conf  zone_intruder007.com  /etc/bind/

CMD service named start && tail -f /dev/null
