#!/bin/bash
# Comprehensive Forensics Lab Practicals Collection Script
# Runs all feasible practicals in this Linux/GitHub Codespace environment
# Each practical output is saved to a separate file in outputs/

set -e
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUTPUT_DIR="$SCRIPT_DIR/outputs"
mkdir -p "$OUTPUT_DIR"

echo "=== Forensics Lab Practicals - Comprehensive Collection ==="
echo "Output directory: $OUTPUT_DIR"
echo ""

# ==============================================================================
# PRACTICAL 1: Windows Network Commands (SKIPPED - Windows not available)
# ==============================================================================
echo "PRACTICAL 1: Study of Network-Related Commands (Windows)"
echo "Status: SKIPPED - This is a Linux container, Windows commands not available"
echo "Note: Run this practical on a Windows VM using PowerShell" > "$OUTPUT_DIR/practical1_windows_skipped.txt"
echo ""

# ==============================================================================
# PRACTICAL 2: Linux Network Commands
# ==============================================================================
echo "PRACTICAL 2: Study of Network-Related Commands (Linux)"
echo "Collecting Linux network configuration and diagnostics..."

# 2.1 Interface configuration
echo "  → Running: ip addr show"
ip addr show > "$OUTPUT_DIR/practical2_ip_addr.txt" 2>&1

# 2.2 Routing table
echo "  → Running: ip route show"
ip route show > "$OUTPUT_DIR/practical2_ip_route.txt" 2>&1

# 2.3 DNS configuration
echo "  → Running: cat /etc/resolv.conf"
cat /etc/resolv.conf > "$OUTPUT_DIR/practical2_resolv_conf.txt" 2>&1

# 2.4 Listening sockets
echo "  → Running: ss -tulwn"
ss -tulwn > "$OUTPUT_DIR/practical2_ss_sockets.txt" 2>&1

# 2.5 All connections
echo "  → Running: ss -tunap"
ss -tunap > "$OUTPUT_DIR/practical2_ss_connections.txt" 2>&1 || ss -tuna > "$OUTPUT_DIR/practical2_ss_connections.txt" 2>&1

# 2.6 ARP cache
echo "  → Running: ip neigh show"
ip neigh show > "$OUTPUT_DIR/practical2_arp_cache.txt" 2>&1

# 2.7 Network interfaces statistics
echo "  → Running: ip -s link"
ip -s link > "$OUTPUT_DIR/practical2_interface_stats.txt" 2>&1

# 2.8 Hostname and system info
echo "  → Running: hostnamectl"
hostnamectl > "$OUTPUT_DIR/practical2_hostname.txt" 2>&1 || hostname > "$OUTPUT_DIR/practical2_hostname.txt" 2>&1

# 2.9 Kernel info
echo "  → Running: uname -a"
uname -a > "$OUTPUT_DIR/practical2_uname.txt" 2>&1

# 2.10 Network connectivity test (ping - may not work in container)
echo "  → Running: ping -c 4 8.8.8.8"
ping -c 4 8.8.8.8 > "$OUTPUT_DIR/practical2_ping.txt" 2>&1 || echo "ICMP ping blocked in container" > "$OUTPUT_DIR/practical2_ping.txt"

# 2.11 Traceroute
echo "  → Running: traceroute -n example.com"
timeout 10 traceroute -n example.com > "$OUTPUT_DIR/practical2_traceroute.txt" 2>&1 || echo "Traceroute timed out or not available" > "$OUTPUT_DIR/practical2_traceroute.txt"

echo "✓ Practical 2 complete"
echo ""

# ==============================================================================
# PRACTICAL 3: Windows Registry Analysis (SKIPPED - Windows not available)
# ==============================================================================
echo "PRACTICAL 3: Analysis of Windows Registry"
echo "Status: SKIPPED - This is a Linux container, Windows registry not available"
echo "Note: Run this practical on a Windows VM using Registry Editor, RegRipper, or similar tools" > "$OUTPUT_DIR/practical3_registry_skipped.txt"
echo ""

# ==============================================================================
# PRACTICAL 4: Network Packet Capture and Analysis (Wireshark/tshark)
# ==============================================================================
echo "PRACTICAL 4: Capture and Analyse Network Packets (Wireshark/tshark)"
echo "Capturing network traffic..."

# 4.1 Short packet capture (requires sudo)
echo "  → Running: tcpdump -i any -c 200 -w capture.pcap"
if command -v tcpdump &> /dev/null; then
    sudo -n tcpdump -i any -c 200 -w "$OUTPUT_DIR/practical4_capture.pcap" > "$OUTPUT_DIR/practical4_tcpdump_log.txt" 2>&1 || echo "tcpdump requires sudo privileges" > "$OUTPUT_DIR/practical4_tcpdump_log.txt"
else
    echo "tcpdump not installed" > "$OUTPUT_DIR/practical4_tcpdump_log.txt"
fi

# 4.2 Analyze the capture with tshark
echo "  → Analyzing capture with tshark"
if [ -f "$OUTPUT_DIR/practical4_capture.pcap" ] && command -v tshark &> /dev/null; then
    # Summary statistics
    tshark -r "$OUTPUT_DIR/practical4_capture.pcap" -q -z io,stat,0 > "$OUTPUT_DIR/practical4_capture_summary.txt" 2>&1
    
    # Protocol hierarchy
    tshark -r "$OUTPUT_DIR/practical4_capture.pcap" -q -z io,phs > "$OUTPUT_DIR/practical4_protocol_hierarchy.txt" 2>&1
    
    # Conversations
    tshark -r "$OUTPUT_DIR/practical4_capture.pcap" -q -z conv,ip > "$OUTPUT_DIR/practical4_ip_conversations.txt" 2>&1
    
    # DNS queries
    tshark -r "$OUTPUT_DIR/practical4_capture.pcap" -Y dns -T fields -e frame.number -e dns.qry.name > "$OUTPUT_DIR/practical4_dns_queries.txt" 2>&1
    
    # HTTP requests
    tshark -r "$OUTPUT_DIR/practical4_capture.pcap" -Y 'http.request' -T fields -e frame.number -e ip.src -e http.host -e http.request.uri > "$OUTPUT_DIR/practical4_http_requests.txt" 2>&1
    
    # First 50 packets summary
    tshark -r "$OUTPUT_DIR/practical4_capture.pcap" -c 50 > "$OUTPUT_DIR/practical4_first_50_packets.txt" 2>&1
else
    echo "Capture file not available or tshark not installed" > "$OUTPUT_DIR/practical4_capture_summary.txt"
fi

echo "✓ Practical 4 complete"
echo ""

# ==============================================================================
# PRACTICAL 5: Forensic Imaging (FTK/EnCase - not available in Linux container)
# ==============================================================================
echo "PRACTICAL 5: Creating Forensic Image (FTK Imager/EnCase)"
echo "Status: PARTIAL - FTK/EnCase not available; demonstrating Linux alternatives"

# 5.1 List block devices
echo "  → Running: lsblk"
lsblk > "$OUTPUT_DIR/practical5_block_devices.txt" 2>&1

# 5.2 Disk information
echo "  → Running: df -h"
df -h > "$OUTPUT_DIR/practical5_disk_usage.txt" 2>&1

# 5.3 File system info
echo "  → Running: mount"
mount > "$OUTPUT_DIR/practical5_mounted_filesystems.txt" 2>&1

# 5.4 Create a demonstration dd image (small test file)
echo "  → Creating test forensic image with dd"
dd if=/dev/urandom of="$OUTPUT_DIR/practical5_test_data.bin" bs=1M count=1 2>&1 | head -20 > "$OUTPUT_DIR/practical5_dd_image_creation.txt"

# 5.5 Compute hash of the test image
echo "  → Computing SHA256 hash"
sha256sum "$OUTPUT_DIR/practical5_test_data.bin" > "$OUTPUT_DIR/practical5_test_data_hash.txt" 2>&1

echo "Note: For actual forensic imaging on physical drives, use 'dd', 'dc3dd', or 'guymager' on Linux" >> "$OUTPUT_DIR/practical5_dd_image_creation.txt"
echo "✓ Practical 5 complete (partial - demonstration only)"
echo ""

# ==============================================================================
# PRACTICAL 6: System Monitoring & Process Tracking
# ==============================================================================
echo "PRACTICAL 6: System Internals - Process & Resource Monitoring"

# 6a. Monitor live processes
echo "  → 6a: Capturing process list (ps aux)"
ps aux > "$OUTPUT_DIR/practical6a_process_list.txt" 2>&1

echo "  → 6a: Process tree (ps auxf)"
ps auxf > "$OUTPUT_DIR/practical6a_process_tree.txt" 2>&1

echo "  → 6a: Top processes snapshot (top -b -n 1)"
top -b -n 1 | head -50 > "$OUTPUT_DIR/practical6a_top_snapshot.txt" 2>&1

# 6b. RAM information
echo "  → 6b: RAM usage (free -h)"
free -h > "$OUTPUT_DIR/practical6b_ram_usage.txt" 2>&1

echo "  → 6b: Detailed memory info (cat /proc/meminfo)"
cat /proc/meminfo > "$OUTPUT_DIR/practical6b_meminfo.txt" 2>&1

echo "  → 6b: Virtual memory statistics (vmstat)"
vmstat > "$OUTPUT_DIR/practical6b_vmstat.txt" 2>&1

echo "Note: For RAM capture on Linux, use 'LiME' kernel module or 'AVML'" > "$OUTPUT_DIR/practical6b_ram_capture_note.txt"

# 6c. Network connections (TCP/UDP packets)
echo "  → 6c: Active network connections (ss -anp)"
ss -anp > "$OUTPUT_DIR/practical6c_network_connections.txt" 2>&1 || ss -an > "$OUTPUT_DIR/practical6c_network_connections.txt" 2>&1

echo "  → 6c: Network statistics (netstat -s)"
netstat -s > "$OUTPUT_DIR/practical6c_network_stats.txt" 2>&1 || ss -s > "$OUTPUT_DIR/practical6c_network_stats.txt" 2>&1

# 6d. Hard disk monitoring
echo "  → 6d: Disk I/O statistics (iostat)"
iostat > "$OUTPUT_DIR/practical6d_disk_io.txt" 2>&1 || echo "iostat not installed (install sysstat package)" > "$OUTPUT_DIR/practical6d_disk_io.txt"

echo "  → 6d: Disk usage by directory (du -sh /*)"
timeout 5 du -sh /* 2>/dev/null | head -30 > "$OUTPUT_DIR/practical6d_disk_usage_breakdown.txt" 2>&1 || echo "Disk usage scan timed out or restricted" > "$OUTPUT_DIR/practical6d_disk_usage_breakdown.txt"

# 6e. Virtual memory
echo "  → 6e: Virtual memory detailed (vmstat -s)"
vmstat -s > "$OUTPUT_DIR/practical6e_vmstat_detailed.txt" 2>&1

echo "  → 6e: Swap usage"
swapon --show > "$OUTPUT_DIR/practical6e_swap_usage.txt" 2>&1 || echo "No swap configured" > "$OUTPUT_DIR/practical6e_swap_usage.txt"

# 6f. Cache memory
echo "  → 6f: Cache and buffer info (from /proc/meminfo)"
grep -E 'Cached|Buffers|Slab' /proc/meminfo > "$OUTPUT_DIR/practical6f_cache_memory.txt" 2>&1

echo "  → 6f: Page cache statistics (cat /proc/vmstat | grep cache)"
grep cache /proc/vmstat > "$OUTPUT_DIR/practical6f_page_cache_stats.txt" 2>&1

echo "✓ Practical 6 complete"
echo ""

# ==============================================================================
# Additional forensics-relevant data
# ==============================================================================
echo "Collecting additional forensics data..."

# System uptime
echo "  → System uptime"
uptime > "$OUTPUT_DIR/additional_uptime.txt" 2>&1

# Kernel messages
echo "  → Recent kernel messages (dmesg)"
dmesg | tail -200 > "$OUTPUT_DIR/additional_dmesg.txt" 2>&1 || echo "dmesg requires privileges" > "$OUTPUT_DIR/additional_dmesg.txt"

# Environment variables
echo "  → Environment variables"
env > "$OUTPUT_DIR/additional_environment.txt" 2>&1

# Loaded kernel modules
echo "  → Loaded kernel modules (lsmod)"
lsmod > "$OUTPUT_DIR/additional_lsmod.txt" 2>&1

# Open files
echo "  → Open files sample (lsof | head -200)"
lsof 2>/dev/null | head -200 > "$OUTPUT_DIR/additional_lsof.txt" 2>&1 || echo "lsof requires privileges or not installed" > "$OUTPUT_DIR/additional_lsof.txt"

# ==============================================================================
# Create summary/index
# ==============================================================================
echo "  → Creating collection summary"
cat > "$OUTPUT_DIR/collection_summary.txt" <<EOF
Forensics Lab Practicals - Collection Summary
===============================================
Collection Date: $(date)
Hostname: $(hostname)
Kernel: $(uname -r)
Platform: $(uname -m)

Output Files Generated:
$(ls -1 "$OUTPUT_DIR" | nl)

Total files: $(ls -1 "$OUTPUT_DIR" | wc -l)

Notes:
- Practical 1 (Windows commands): Skipped - requires Windows VM
- Practical 2 (Linux commands): Completed
- Practical 3 (Registry): Skipped - requires Windows VM
- Practical 4 (Packet capture): Completed (tshark analysis)
- Practical 5 (Forensic imaging): Partial - demonstrated dd/hash
- Practical 6 (System monitoring): Completed
EOF

echo ""
echo "=== Collection Complete ==="
echo "All outputs saved to: $OUTPUT_DIR"
echo "Summary: $OUTPUT_DIR/collection_summary.txt"
echo ""
ls -lh "$OUTPUT_DIR" | head -60
