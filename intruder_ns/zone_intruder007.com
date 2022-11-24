$TTL 3D
@       IN      SOA   ns.intruder007.com. admin.intruder007.com. (
                2008111001
                8H
                2H
                4W
                1D)

@       IN      NS    ns.intruder007.com.

@       IN      A     10.9.0.18
www     IN      A     10.9.0.18
ns      IN      A     10.9.0.17
*       IN      A     10.9.0.10
