import { useState } from 'react';

type Step = {
  id: number;
  title: string;
  icon: string;
  content: React.ReactNode;
};

function CodeBlock({ children, language = 'bash' }: { children: string; language?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative group my-4">
      <div className="absolute top-2 right-2 flex items-center gap-2">
        <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">{language}</span>
        <button
          onClick={handleCopy}
          className="text-xs bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded transition-colors"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre className="bg-gray-900 text-green-400 p-4 pt-10 rounded-lg overflow-x-auto text-sm font-mono border border-gray-700">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-4 rounded-r-lg">
      <div className="flex items-start gap-3">
        <span className="text-amber-500 text-xl">⚠️</span>
        <div className="text-amber-800 text-sm">{children}</div>
      </div>
    </div>
  );
}

function Info({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 rounded-r-lg">
      <div className="flex items-start gap-3">
        <span className="text-blue-500 text-xl">ℹ️</span>
        <div className="text-blue-800 text-sm">{children}</div>
      </div>
    </div>
  );
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-green-50 border-l-4 border-green-500 p-4 my-4 rounded-r-lg">
      <div className="flex items-start gap-3">
        <span className="text-green-500 text-xl">💡</span>
        <div className="text-green-800 text-sm">{children}</div>
      </div>
    </div>
  );
}

function PinDiagram() {
  return (
    <div className="my-6 bg-gray-50 p-6 rounded-xl border border-gray-200">
      <h4 className="font-bold text-gray-800 mb-4 text-center">ST-Link V2 ↔ Ender 3 V3 SE Board Pinout</h4>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* ST-Link V2 */}
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
          <div className="text-center font-bold text-sm mb-3 text-cyan-400">ST-Link V2</div>
          <div className="space-y-2 text-sm font-mono">
            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-red-500 rounded-full"></span> 3.3V (Pin 1)</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-orange-500 rounded-full"></span> SWDIO (Pin 2)</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-black border border-gray-400 rounded-full"></span> GND (Pin 3)</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-yellow-500 rounded-full"></span> SWCLK (Pin 4)</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-purple-500 rounded-full"></span> NRST (Pin 5) <span className="text-gray-400 text-xs">(optional)</span></div>
          </div>
        </div>
        {/* Arrow */}
        <div className="text-4xl text-gray-400">→</div>
        {/* Board */}
        <div className="bg-green-900 text-white p-4 rounded-lg shadow-lg border-2 border-green-600">
          <div className="text-center font-bold text-sm mb-3 text-green-300">Ender 3 V3 SE Board</div>
          <div className="space-y-2 text-sm font-mono">
            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-red-500 rounded-full"></span> 3.3V</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-orange-500 rounded-full"></span> SWDIO</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-black border border-gray-400 rounded-full"></span> GND</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-yellow-500 rounded-full"></span> SWCLK</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-purple-500 rounded-full"></span> NRST <span className="text-gray-400 text-xs">(optional)</span></div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center text-xs text-gray-500">
        SWD pins are typically located near the STM32F103 chip. Look for a small header labeled "SWD" or test pads.
      </div>
    </div>
  );
}

function DeviceSpecs() {
  return (
    <div className="my-6 bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-200">
      <h4 className="font-bold text-gray-800 mb-4 text-center">Samsung Galaxy Tab A 10.5 (SM-T395) Specs</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="text-2xl mb-1">⚡</div>
          <div className="text-xs text-gray-500">Processor</div>
          <div className="text-sm font-bold text-gray-800">Snapdragon 450</div>
          <div className="text-xs text-gray-500">Octa-core 1.8GHz</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="text-2xl mb-1">🧠</div>
          <div className="text-xs text-gray-500">RAM</div>
          <div className="text-sm font-bold text-gray-800">3 GB</div>
          <div className="text-xs text-gray-500">LPDDR4</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="text-2xl mb-1">💾</div>
          <div className="text-xs text-gray-500">Storage</div>
          <div className="text-sm font-bold text-gray-800">32 GB</div>
          <div className="text-xs text-gray-500">+ microSD</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="text-2xl mb-1">🔋</div>
          <div className="text-xs text-gray-500">Battery</div>
          <div className="text-sm font-bold text-gray-800">6000 mAh</div>
          <div className="text-xs text-gray-500">Micro USB</div>
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-gray-600">
        <strong>Android:</strong> 8.1 Oreo → upgradable to Android 10 &nbsp;|&nbsp; <strong>Display:</strong> 10.1" 1920×1200 TFT
      </div>
    </div>
  );
}

const steps: Step[] = [
  {
    id: 1,
    title: "Prerequisites & Hardware",
    icon: "📦",
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">Before starting, make sure you have all the required hardware and software ready.</p>
        
        <h3 className="font-bold text-lg text-gray-800 mt-6">Your Klipper Host: Samsung Galaxy Tab A 10.5 (SM-T395)</h3>
        <DeviceSpecs />

        <h3 className="font-bold text-lg text-gray-800 mt-6">Required Hardware</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Samsung Galaxy Tab A 10.5 (SM-T395)</strong> — your Klipper host</li>
          <li><strong>ST-Link V2</strong> programmer (clone versions work fine, ~$3-5)</li>
          <li><strong>USB OTG adapter</strong> (microUSB to USB-A female) — for connecting ST-Link & printer</li>
          <li><strong>OTG + Charge cable</strong> or <strong>powered USB hub</strong> (see Step 2 for details)</li>
          <li><strong>MicroSD card</strong> (for initial firmware flash to printer, if needed)</li>
          <li><strong>USB cable</strong> (USB-A to USB-B/C for connecting printer to tablet)</li>
          <li><strong>Jumper wires</strong> (female-to-female, 4-5 wires for ST-Link)</li>
          <li><strong>Ender 3 V3 SE</strong> 3D printer</li>
        </ul>

        <Warning>
          <strong>Important:</strong> The Ender 3 V3 SE mainboard (CR4NS200320C13) uses either an <strong>STM32F103</strong> or <strong>GD32F303RET6</strong> (a GigaDevice clone). Check the chip marking on your board. If you have the GD32 variant, you'll need to enable "Disable SWD at startup" in the firmware config.
        </Warning>

        <Info>
          <strong>Why use the Galaxy Tab as host?</strong> The SM-T395 has a 1.8GHz octa-core processor and 3GB RAM — more than enough to run Klipper. Plus, you get a built-in touchscreen display for KlipperScreen, WiFi, and a large battery for UPS-like behavior during power outages.
        </Info>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Required Software (on the tablet)</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>BeamKlipper</strong> app (easiest method — no root required)</li>
          <li>OR <strong>Termux</strong> + proot-distro (advanced method — more flexible)</li>
          <li>A file manager app (for managing config files)</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    title: "Prepare the Tablet (OTG + Charging)",
    icon: "🔌",
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">The SM-T395 has a single <strong>microUSB</strong> port. You need to use it for both OTG (connecting to the printer/ST-Link) AND charging simultaneously. This requires a special setup.</p>

        <Warning>
          <strong>CRITICAL:</strong> The SM-T395 does NOT natively support OTG + charging at the same time through a simple adapter. You need one of the solutions below.
        </Warning>

        <h3 className="font-bold text-lg text-gray-800">Solution A: Powered USB Hub (Recommended)</h3>
        <p className="text-gray-700">Use a powered microUSB OTG hub that supports simultaneous charging:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Purchase a <strong>microUSB OTG hub with charging port</strong> (search "micro USB OTG charging adapter" on Amazon/AliExpress)</li>
          <li>These have a microUSB female for charging + USB-A ports for peripherals</li>
          <li>Connect the hub to your tablet, plug in the charger, then connect printer/ST-Link to the USB-A ports</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Solution B: Custom OTG+Charge Cable (DIY)</h3>
        <p className="text-gray-700">Build a cable that connects the ID pin to ground (enables OTG) while allowing power through:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>You need a microUSB cable, a <strong>resistor (typically 10kΩ)</strong>, and some soldering</li>
          <li>Connect the ID pin (pin 4) to GND through the resistor inside the microUSB connector</li>
          <li>This tells the tablet to enable OTG mode while still accepting charge</li>
        </ul>
        <Info>
          The exact resistor value varies by device. For the SM-T395, try values between <strong>1kΩ and 100kΩ</strong>. Start with 10kΩ. You may need to experiment to find the right value that allows both OTG and charging.
        </Info>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Solution C: USB-C Hub via Adapter (if available)</h3>
        <p className="text-gray-700">If you have a microUSB to USB-C adapter that supports OTG passthrough, you can use a standard USB-C hub with Power Delivery passthrough.</p>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Tablet Settings to Configure</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Go to <strong>Settings → Developer Options</strong> (enable by tapping Build Number 7 times)</li>
          <li>Enable <strong>USB Debugging</strong></li>
          <li>Set <strong>Stay Awake</strong> (screen won't sleep while charging)</li>
          <li>Disable <strong>Battery Optimization</strong> for BeamKlipper (Settings → Apps → BeamKlipper → Battery → Don't optimize)</li>
          <li>Disable any <strong>aggressive sleep/doze</strong> modes</li>
        </ol>

        <Tip>
          <strong>Pro tip:</strong> Run this in a terminal app (like Termux) to prevent Android from killing background processes:
          <code className="block bg-gray-100 p-2 mt-2 rounded text-sm">dumpsys deviceidle disable</code>
          Also install a "Wake Lock" app from the Play Store to keep the CPU awake during prints.
        </Tip>
      </div>
    ),
  },
  {
    id: 3,
    title: "Install BeamKlipper (Easiest Method)",
    icon: "📱",
    content: (
      <div className="space-y-4">
        <p className="text-gray-700"><strong>BeamKlipper</strong> is the easiest way to run Klipper on Android. It requires <strong>no root</strong>, runs as a regular app, and bundles Klipper + Moonraker + Fluidd/Mainsail all in one package.</p>

        <Info>
          <strong>BeamKlipper requirements:</strong> Android 5.0+ with OTG support. Your SM-T395 runs Android 10 — perfect!
        </Info>

        <h3 className="font-bold text-lg text-gray-800">Step-by-Step Installation</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>
            <strong>Download BeamKlipper APK</strong>
            <br />
            <span className="text-sm text-gray-500">Go to <a href="https://github.com/utkabobr/BeamKlipper/releases/latest" className="text-blue-600 hover:underline" target="_blank" rel="noopener">github.com/utkabobr/BeamKlipper/releases</a> and download the latest APK</span>
          </li>
          <li>
            <strong>Install the APK</strong>
            <br />
            <span className="text-sm text-gray-500">You may need to enable "Install from Unknown Sources" in Settings → Security</span>
          </li>
          <li>
            <strong>Open BeamKlipper and grant permissions</strong>
            <br />
            <span className="text-sm text-gray-500">Allow USB access, storage, notifications, and background activity</span>
          </li>
          <li>
            <strong>Add a printer instance</strong>
            <br />
            <span className="text-sm text-gray-500">Click "Add Printer" and select a config file. For Ender 3 V3 SE, use a community config or generic template</span>
          </li>
          <li>
            <strong>Download the firmware for your printer</strong>
            <br />
            <span className="text-sm text-gray-500">Get the prebuilt firmware.bin from <a href="https://github.com/utkabobr/klipper/tree/prebuilt-v0.12.0" className="text-blue-600 hover:underline" target="_blank" rel="noopener">utkabobr/klipper prebuilt</a> or build your own (see Step 5)</span>
          </li>
          <li>
            <strong>Connect your printer via USB OTG</strong>
            <br />
            <span className="text-sm text-gray-500">Plug the printer's USB cable into the OTG adapter/hub connected to your tablet</span>
          </li>
          <li>
            <strong>Click "Start" in BeamKlipper</strong>
            <br />
            <span className="text-sm text-gray-500">The app will start Klipper, Moonraker, and the web interface</span>
          </li>
          <li>
            <strong>Access the web interface</strong>
            <br />
            <span className="text-sm text-gray-500">Open a browser on any device and go to <code className="bg-gray-100 px-1 rounded">http://&lt;tablet-ip&gt;:8888/</code></span>
          </li>
        </ol>

        <h3 className="font-bold text-lg text-gray-800 mt-6">What's Included in BeamKlipper</h3>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div className="bg-blue-50 p-3 rounded-lg text-sm">
            <strong className="text-blue-800">Klipper</strong>
            <p className="text-blue-600 text-xs mt-1">Firmware host (Klippy)</p>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg text-sm">
            <strong className="text-purple-800">Moonraker</strong>
            <p className="text-purple-600 text-xs mt-1">API web server</p>
          </div>
          <div className="bg-green-50 p-3 rounded-lg text-sm">
            <strong className="text-green-800">Fluidd</strong>
            <p className="text-green-600 text-xs mt-1">Web interface</p>
          </div>
          <div className="bg-orange-50 p-3 rounded-lg text-sm">
            <strong className="text-orange-800">Mainsail</strong>
            <p className="text-orange-600 text-xs mt-1">Alternative web UI</p>
          </div>
        </div>

        <Tip>
          <strong>Web interface URLs:</strong>
          <br />• Fluidd/Mainsail: <code className="bg-gray-100 px-1 rounded">http://&lt;tablet-ip&gt;:8888/</code>
          <br />• Camera stream: <code className="bg-gray-100 px-1 rounded">http://&lt;tablet-ip&gt;:8889/</code>
        </Tip>

        <Warning>
          <strong>Important limitation:</strong> BeamKlipper cannot build firmware on the device (no SSH/terminal access). You must flash the printer firmware separately using the ST-Link V2 method (Step 5) or SD card method. BeamKlipper only runs the Klipper host software.
        </Warning>
      </div>
    ),
  },
  {
    id: 4,
    title: "Alternative: Termux + proot-distro (Advanced)",
    icon: "🐧",
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">If you want more control (ability to build firmware, SSH access, custom services), use Termux with a Linux proot environment.</p>

        <Warning>
          <strong>This method is more complex</strong> and requires more technical knowledge. Only use this if BeamKlipper doesn't meet your needs.
        </Warning>

        <h3 className="font-bold text-lg text-gray-800">Install Required Apps</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li><strong>Termux</strong> — install from <a href="https://f-droid.org/packages/com.termux/" className="text-blue-600 hover:underline" target="_blank" rel="noopener">F-Droid</a> (NOT Play Store — that version is outdated)</li>
          <li><strong>Termux:API</strong> — from F-Droid (for hardware access)</li>
          <li><strong>Termux:Boot</strong> — from F-Droid (for autostart)</li>
          <li><strong>XServer XSDL</strong> — from Play Store (for KlipperScreen GUI)</li>
        </ol>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Set Up proot-distro (Linux Environment)</h3>
        <CodeBlock>{`# Update Termux
pkg update && pkg upgrade

# Install proot-distro
pkg install proot-distro

# Install Debian
proot-distro install debian

# Login to Debian
proot-distro login debian

# Inside Debian:
apt update && apt upgrade -y
apt install git sudo python3 python3-pip \
  virtualenv libconfig-dev libdbus-1-dev \
  libegl-dev libgl-dev libxcb-dev \
  libwayland-dev wayland-protocols \
  cmake build-essential nginx -y`}</CodeBlock>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Install Klipper via KIAUH</h3>
        <CodeBlock>{`# Clone KIAUH
cd ~
git clone https://github.com/dw-0/KIAUH.git

# Run KIAUH
cd KIAUH
./kiauh.sh

# From the menu install:
# 1. Klipper
# 2. Moonraker  
# 3. Mainsail (or Fluidd)
# 4. KlipperScreen (optional - needs X11)`}</CodeBlock>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Configure USB Serial Access</h3>
        <p className="text-gray-700">To access the printer via USB from within proot, you need to bind-mount the USB device:</p>
        <CodeBlock>{`# Exit debian first, then in Termux:
# Find your printer's USB device
ls /dev/bus/usb/*

# Login to debian with USB access:
proot-distro login debian --bind /dev/bus/usb:/dev/bus/usb

# Inside debian, check for the printer:
ls /dev/ttyUSB* /dev/ttyACM* 2>/dev/null`}</CodeBlock>

        <Tip>
          <strong>For KlipperScreen:</strong> Start XServer XSDL first, then set the DISPLAY variable:
          <code className="block bg-gray-100 p-2 mt-2 rounded text-sm">export DISPLAY=localhost:0</code>
          Then launch KlipperScreen. It will render on the XServer display.
        </Tip>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Building Firmware (Advantage over BeamKlipper)</h3>
        <CodeBlock>{`# Inside the Debian proot environment:
cd ~/klipper
make menuconfig

# Configure for Ender 3 V3 SE:
# - Micro-controller: STMicroelectronics STM32
# - Processor: STM32F103
# - Bootloader: No bootloader (for ST-Link flash)
# - Communication: USB on PA11/PA12

make

# The compiled firmware will be at ~/klipper/out/klipper.bin
# Copy it to your tablet's storage for ST-Link flashing`}</CodeBlock>
      </div>
    ),
  },
  {
    id: 5,
    title: "Flash Firmware via ST-Link V2",
    icon: "🔧",
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">Now flash the Klipper firmware to your Ender 3 V3 SE's mainboard using the ST-Link V2. Since your tablet can't run STM32CubeProgrammer natively, you have two options:</p>

        <h3 className="font-bold text-lg text-gray-800">Option A: Flash from a PC (Recommended for first time)</h3>
        <p className="text-gray-700">Use a Windows/Mac/Linux computer with STM32CubeProgrammer for the initial flash:</p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Download the prebuilt firmware from <a href="https://github.com/utkabobr/klipper/tree/prebuilt-v0.12.0" className="text-blue-600 hover:underline" target="_blank" rel="noopener">utkabobr/klipper prebuilt</a> (compatible with BeamKlipper)</li>
          <li>OR compile your own on a PC / via Termux proot</li>
          <li>Install <strong>STM32CubeProgrammer</strong> on the PC</li>
          <li>Connect ST-Link V2 to PC via USB</li>
          <li>Connect ST-Link V2 to printer board SWD pins</li>
          <li>Flash the firmware (see connection details below)</li>
        </ol>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Option B: Flash via Termux on the Tablet (Advanced)</h3>
        <p className="text-gray-700">If using the Termux method, you can flash directly from the tablet:</p>
        <CodeBlock>{`# In Termux:
pkg install openocd android-tools

# Connect ST-Link V2 via OTG
# Verify connection:
lsusb

# Flash using st-flash:
st-flash write /sdcard/klipper.bin 0x08000000

# Or using OpenOCD:
openocd -f interface/stlink.cfg -c "transport select hla_swd" \\
  -f target/stm32f1x.cfg \\
  -c "program /sdcard/klipper.bin verify reset exit 0x08000000"`}</CodeBlock>

        <h3 className="font-bold text-lg text-gray-800 mt-6">ST-Link V2 Connection to Printer Board</h3>
        <PinDiagram />

        <h3 className="font-bold text-lg text-gray-800 mt-6">Firmware Configuration</h3>
        <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm space-y-1">
          <div className="text-cyan-400"># For STM32F103 (direct ST-Link flash, no bootloader):</div>
          <div>Micro-controller architecture: <span className="text-green-400">STMicroelectronics STM32</span></div>
          <div>Processor model: <span className="text-green-400">STM32F103</span></div>
          <div>Bootloader offset: <span className="text-green-400">No bootloader</span></div>
          <div>Communication interface: <span className="text-green-400">USB (on PA11/PA12)</span></div>
        </div>

        <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm space-y-1 mt-4">
          <div className="text-cyan-400"># For GD32F303RET6 variant:</div>
          <div>Micro-controller architecture: <span className="text-green-400">STMicroelectronics STM32</span></div>
          <div>Processor model: <span className="text-green-400">STM32F103</span></div>
          <div><span className="text-yellow-400">[*] Disable SWD at startup (for GigaDevice clones)</span></div>
          <div>Bootloader offset: <span className="text-green-400">No bootloader</span></div>
          <div>Communication interface: <span className="text-green-400">USB (on PA11/PA12)</span></div>
        </div>

        <Warning>
          <strong>SAFETY:</strong> Disconnect printer from power before connecting ST-Link. After flashing, disconnect ST-Link before powering on the printer.
        </Warning>

        <Tip>
          <strong>Using BeamKlipper's prebuilt firmware:</strong> If you use BeamKlipper, download the matching prebuilt firmware.bin from the BeamKlipper GitHub. This ensures version compatibility between the host software and printer firmware.
        </Tip>
      </div>
    ),
  },
  {
    id: 6,
    title: "Configure printer.cfg",
    icon: "📝",
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">Configure Klipper to communicate with your Ender 3 V3 SE. You'll edit the printer.cfg through the web interface on your tablet.</p>

        <h3 className="font-bold text-lg text-gray-800">Find the Serial Port</h3>
        <p className="text-gray-700">In BeamKlipper, the serial port is auto-detected when you connect the printer via OTG. You can also configure it manually in the "Devices" tab of the web interface.</p>

        <Info>
          <strong>BeamKlipper auto-detection:</strong> Version 1.0.1+ automatically configures the serial port if you have a single printer setup. Just connect the printer via USB OTG and BeamKlipper will detect it.
        </Info>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Download a Pre-made Config</h3>
        <p className="text-gray-700">Use one of these community-maintained configs:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><a href="https://github.com/bootuz-dinamon/ender3-v3-se-full-klipper" className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener">bootuz-dinamon/ender3-v3-se-full-klipper</a> — Full config with driver section</li>
          <li><a href="https://github.com/0xD34D/ender3-v3-se-klipper-config" className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener">0xD34D/ender3-v3-se-klipper-config</a> — Config with PRtouch support</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Edit Config via Web Interface</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Open a browser on your tablet (or any device on the same WiFi)</li>
          <li>Go to <code className="bg-gray-100 px-1 rounded">http://&lt;tablet-ip&gt;:8888/</code></li>
          <li>In Fluidd/Mainsail, go to the <strong>Configuration</strong> tab</li>
          <li>Open <code className="bg-gray-100 px-1 rounded">printer.cfg</code></li>
          <li>Paste the community config contents</li>
          <li>Update the <code className="bg-gray-100 px-1 rounded">[mcu]</code> section serial path if needed</li>
          <li>Save and restart</li>
        </ol>

        <h3 className="font-bold text-lg text-gray-800 mt-6">MCU Section for USB Connection</h3>
        <CodeBlock language="ini">{`[mcu]
# For BeamKlipper, the serial is usually auto-configured
# If manual, it will be something like:
serial: /dev/bus/usb/001/002
# Or use VID:PID format (more reliable across reboots):
# serial: /dev/serial/by-id/usb-1a86_USB_Serial-if00-port0
restart_method: command`}</CodeBlock>

        <Warning>
          <strong>Pin mappings vary!</strong> Always use the community-verified config files linked above. The CR4NS200320C13 board has specific pin assignments that differ from other Ender 3 boards.
        </Warning>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Finding Your Tablet's IP Address</h3>
        <p className="text-gray-700">On the tablet, go to <strong>Settings → WiFi → tap your connected network</strong> to see the IP address. Or check the BeamKlipper main screen which displays the URL.</p>
      </div>
    ),
  },
  {
    id: 7,
    title: "Verify & Test",
    icon: "✅",
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">Verify that Klipper is communicating with your printer correctly through the tablet.</p>

        <h3 className="font-bold text-lg text-gray-800">Check Connection</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Power on the Ender 3 V3 SE</li>
          <li>Connect the printer to the tablet via USB OTG</li>
          <li>Open BeamKlipper — it should detect the printer</li>
          <li>Click "Start" to launch Klipper</li>
          <li>Open the web interface at <code className="bg-gray-100 px-1 rounded">http://&lt;tablet-ip&gt;:8888/</code></li>
          <li>Check that the status shows <strong>"Ready"</strong></li>
        </ol>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Test Movements</h3>
        <p className="text-gray-700">In the Fluidd/Mainsail console, test basic movements:</p>
        <CodeBlock language="gcode">{`# Test homing
G28

# Test X movement (10mm)
G1 X10 F3000

# Test Y movement (10mm)
G1 Y10 F3000

# Test Z movement (1mm)
G1 Z1 F300

# Test extrusion (5mm at slow speed)
M83
G1 E5 F100`}</CodeBlock>

        <Warning>
          <strong>Keep your hand near the power switch!</strong> During the first test, be ready to turn off the printer if motors move in the wrong direction or make unusual noises.
        </Warning>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Calibration Steps</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>PID tune hotend:</strong> <code className="bg-gray-100 px-1 rounded">PID_CALIBRATE HEATER=extruder TARGET=200</code></li>
          <li><strong>PID tune bed:</strong> <code className="bg-gray-100 px-1 rounded">PID_CALIBRATE HEATER=heater_bed TARGET=60</code></li>
          <li><strong>E-steps calibration:</strong> Extrude 100mm of filament and measure actual vs requested</li>
          <li><strong>Bed mesh:</strong> Run <code className="bg-gray-100 px-1 rounded">BED_MESH_CALIBRATE</code></li>
          <li><strong>Input shaper:</strong> Use an accelerometer for resonance testing</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Set Up as Dedicated Display (Optional)</h3>
        <p className="text-gray-700">Turn your tablet into a dedicated Klipper touchscreen:</p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Set BeamKlipper as the <strong>default launcher</strong> (Settings → Apps → Default apps → Home app)</li>
          <li>Remove the lock screen PIN (required if device is encrypted)</li>
          <li>Enable auto-start for your printer instance in BeamKlipper</li>
          <li>Set screen timeout to "Never" while charging</li>
          <li>Mount the tablet near your printer for a built-in touchscreen interface!</li>
        </ol>

        <Tip>
          <strong>Known limitations:</strong> The Ender 3 V3 SE's built-in screen will show a screensaver after flashing Klipper. Auto Z-offset probing (PRtouch) requires a special Klipper fork by 0xD34D.
        </Tip>
      </div>
    ),
  },
  {
    id: 8,
    title: "Troubleshooting",
    icon: "🔍",
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">Common issues and solutions specific to the Samsung Galaxy Tab A 10.5 + Klipper setup.</p>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-red-700">❌ "MCU: Unable to connect"</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Check OTG connection — make sure the cable is working</li>
              <li>In BeamKlipper, go to "Devices" tab and verify the serial port is detected</li>
              <li>Try unplugging and replugging the USB cable</li>
              <li>Ensure the printer firmware matches the BeamKlipper version</li>
              <li>Restart BeamKlipper and the printer</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-red-700">❌ Tablet not charging while using OTG</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Verify you're using a powered OTG hub or custom OTG+charge cable</li>
              <li>Try different resistor values (1kΩ to 100kΩ) in the DIY cable</li>
              <li>Some USB hubs don't support simultaneous charge — try a different hub</li>
              <li>As a last resort: print from battery power (6000mAh gives ~2-4 hours)</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-red-700">❌ BeamKlipper gets killed in background</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Disable battery optimization for BeamKlipper (Settings → Apps → Battery → Don't optimize)</li>
              <li>Set BeamKlipper as the default launcher</li>
              <li>Install "Wake Lock - CPU Awake" app from Play Store</li>
              <li>Run <code className="bg-gray-100 px-1 rounded">dumpsys deviceidle disable</code> in Termux</li>
              <li>Enable "Stay Awake" in Developer Options</li>
              <li>Some Samsung devices have aggressive task killing — check "Recent apps" → lock BeamKlipper</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-red-700">❌ OTG not detected / USB device not showing</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Check that USB OTG is enabled (some Samsung tablets need it enabled in settings)</li>
              <li>Try a different OTG adapter — some cheap ones don't work</li>
              <li>In Termux, run <code className="bg-gray-100 px-1 rounded">ls /dev/bus/usb/*</code> to check if USB is working</li>
              <li>Restart the tablet with the USB device already connected</li>
              <li>Grant USB permission when prompted by Android</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-red-700">❌ Web interface not accessible from other devices</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Ensure tablet and other devices are on the same WiFi network</li>
              <li>Check the tablet's IP address (Settings → WiFi → network details)</li>
              <li>Port 8888 must be accessible — check if a firewall is blocking it</li>
              <li>Try accessing from the tablet itself: <code className="bg-gray-100 px-1 rounded">http://localhost:8888/</code></li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-red-700">❌ ST-Link can't connect to MCU</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Verify SWDIO and SWCLK are not swapped</li>
              <li>Ensure the board is powered</li>
              <li>Try "Connect Under Reset" mode in STM32CubeProgrammer</li>
              <li>Check wire connections are solid (use short jumper wires)</li>
              <li>Try lowering adapter speed</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-red-700">❌ Motors move wrong direction</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Add or remove <code className="bg-gray-100 px-1 rounded">!</code> before the dir_pin in printer.cfg</li>
              <li>Example: change <code className="bg-gray-100 px-1 rounded">dir_pin: PB9</code> to <code className="bg-gray-100 px-1 rounded">dir_pin: !PB9</code></li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-red-700">❌ Need to restore stock firmware</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Download stock Marlin firmware from Creality's website</li>
              <li>Place the .bin file on a formatted SD card</li>
              <li>Insert into printer and power on</li>
              <li>If SD method doesn't work, use ST-Link V2 to flash stock firmware directly</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];

function Sidebar({ currentStep, onStepClick }: { currentStep: number; onStepClick: (step: number) => void }) {
  return (
    <nav className="hidden lg:block w-72 bg-white border-r border-gray-200 overflow-y-auto sticky top-0 h-screen">
      <div className="p-6">
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Steps</h2>
        <ul className="space-y-1">
          {steps.map((step) => (
            <li key={step.id}>
              <button
                onClick={() => onStepClick(step.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-2 ${
                  currentStep === step.id
                    ? 'bg-blue-50 text-blue-700 font-medium border border-blue-200'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span className="text-base">{step.icon}</span>
                <span>{step.title}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
          <div className="text-xs font-bold text-blue-800 uppercase mb-2">Your Setup</div>
          <div className="space-y-2 text-xs text-blue-700">
            <div className="flex items-center gap-2">📱 Galaxy Tab A 10.5</div>
            <div className="flex items-center gap-2">🖨️ Ender 3 V3 SE</div>
            <div className="flex items-center gap-2">🔧 ST-Link V2</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const scrollToStep = (stepId: number) => {
    setCurrentStep(stepId);
    const element = document.getElementById(`step-${stepId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-xl">🖨️</div>
              <div>
                <h1 className="text-lg font-bold">Klipper Installation Guide</h1>
                <p className="text-xs text-gray-400">Ender 3 V3 SE + Galaxy Tab SM-T395 + ST-Link V2</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3 text-sm">
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">STM32F103</span>
              <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-medium">SWD Flash</span>
              <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-medium">Android Host</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <Sidebar currentStep={currentStep} onStepClick={scrollToStep} />

        {/* Main Content */}
        <main className="flex-1 max-w-4xl mx-auto px-4 py-8 lg:px-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl p-8 mb-8 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-3">Install Klipper on Ender 3 V3 SE</h2>
            <p className="text-blue-100 text-lg mb-2">
              Using your <strong>Samsung Galaxy Tab A 10.5 (SM-T395)</strong> as the Klipper host — no Raspberry Pi needed!
            </p>
            <p className="text-blue-200 text-sm mb-4">
              Flash firmware via ST-Link V2, then control everything from your tablet's touchscreen.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">⏱️ ~2-3 hours</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">🔧 Intermediate</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">📱 No Raspberry Pi</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">📟 ST-Link V2</span>
            </div>
          </div>

          {/* START HERE - Action Plan */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-2xl p-6 mb-8 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-2xl text-white">🚀</div>
              <div>
                <h2 className="text-2xl font-bold text-emerald-900">Start Here — Your Action Plan</h2>
                <p className="text-emerald-700 text-sm">Follow this checklist in order. Check off each item as you go.</p>
              </div>
            </div>

            {/* Shopping List */}
            <div className="bg-white rounded-xl p-5 mb-5 border border-emerald-200">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-xl">🛒</span> Step 1: Get the Hardware (if you don't have it yet)
              </h3>
              <div className="space-y-2">
                <label className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 accent-emerald-500" />
                  <div>
                    <span className="font-medium text-gray-800">ST-Link V2 programmer</span>
                    <span className="text-sm text-gray-500 block">~$3-5 on AliExpress/Amazon. Search "ST-Link V2 mini". Clone versions work fine.</span>
                  </div>
                </label>
                <label className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 accent-emerald-500" />
                  <div>
                    <span className="font-medium text-gray-800">MicroUSB OTG adapter</span>
                    <span className="text-sm text-gray-500 block">Female USB-A to male microUSB. Needed to connect USB devices to your tablet.</span>
                  </div>
                </label>
                <label className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 accent-emerald-500" />
                  <div>
                    <span className="font-medium text-gray-800">Powered USB hub OR OTG+Charge cable</span>
                    <span className="text-sm text-gray-500 block">Your tablet needs to charge AND use OTG at the same time. A powered microUSB OTG hub with charging passthrough is easiest.</span>
                  </div>
                </label>
                <label className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 accent-emerald-500" />
                  <div>
                    <span className="font-medium text-gray-800">Jumper wires (female-to-female)</span>
                    <span className="text-sm text-gray-500 block">4-5 wires to connect ST-Link V2 to the printer's SWD pins.</span>
                  </div>
                </label>
                <label className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 accent-emerald-500" />
                  <div>
                    <span className="font-medium text-gray-800">USB cable (A to B or A to C)</span>
                    <span className="text-sm text-gray-500 block">To connect the printer to the tablet. Must be a DATA cable, not charge-only.</span>
                  </div>
                </label>
                <label className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 accent-emerald-500" />
                  <div>
                    <span className="font-medium text-gray-800">A Windows/Mac/Linux PC (for initial firmware flash)</span>
                    <span className="text-sm text-gray-500 block">You need a computer to run STM32CubeProgrammer for the one-time firmware flash via ST-Link. Borrow one if needed.</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Decision Tree */}
            <div className="bg-white rounded-xl p-5 mb-5 border border-emerald-200">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-xl">🔀</span> Step 2: Choose Your Path
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-2 border-emerald-400 bg-emerald-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full font-bold">RECOMMENDED</span>
                  </div>
                  <h4 className="font-bold text-emerald-900">Path A: BeamKlipper</h4>
                  <p className="text-sm text-emerald-800 mt-1">Easiest. No root. Install one APK, done.</p>
                  <ul className="text-xs text-emerald-700 mt-2 space-y-1 list-disc list-inside">
                    <li>No Linux knowledge needed</li>
                    <li>Works on stock Android</li>
                    <li>Can't build firmware on device</li>
                    <li>Best for most users</li>
                  </ul>
                  <div className="mt-3 text-xs font-bold text-emerald-900">Choose this if: you just want it to work.</div>
                </div>
                <div className="border border-gray-300 bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full font-bold">ADVANCED</span>
                  </div>
                  <h4 className="font-bold text-gray-800">Path B: Termux + proot</h4>
                  <p className="text-sm text-gray-600 mt-1">More control. Build firmware on device.</p>
                  <ul className="text-xs text-gray-600 mt-2 space-y-1 list-disc list-inside">
                    <li>Full Linux environment</li>
                    <li>Can build firmware on tablet</li>
                    <li>SSH access</li>
                    <li>More complex setup</li>
                  </ul>
                  <div className="mt-3 text-xs font-bold text-gray-700">Choose this if: you want full control.</div>
                </div>
              </div>
            </div>

            {/* Action Steps */}
            <div className="bg-white rounded-xl p-5 border border-emerald-200">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-xl">✅</span> Step 3: Do These In Order
              </h3>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</div>
                  <div>
                    <div className="font-medium text-gray-800">Open your printer and check the mainboard chip</div>
                    <div className="text-sm text-gray-600">Look at the big square chip. Is it <strong>STM32F103</strong> or <strong>GD32F303</strong>? Write this down — you'll need it later.</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</div>
                  <div>
                    <div className="font-medium text-gray-800">Locate the SWD pins on the mainboard</div>
                    <div className="text-sm text-gray-600">Look for a small header labeled "SWD" or "DEBUG" near the STM32 chip. Note the pin layout (SWDIO, SWCLK, GND, 3.3V).</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</div>
                  <div>
                    <div className="font-medium text-gray-800">Flash Klipper firmware via ST-Link V2 (using a PC)</div>
                    <div className="text-sm text-gray-600">Connect ST-Link → SWD pins → PC. Use STM32CubeProgrammer to flash the prebuilt firmware.bin. See <strong>Step 5</strong> below for details.</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</div>
                  <div>
                    <div className="font-medium text-gray-800">Set up your Galaxy Tab for OTG + charging</div>
                    <div className="text-sm text-gray-600">Get the OTG hub/cable working so the tablet can charge while connected to USB devices. See <strong>Step 2</strong> below.</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">5</div>
                  <div>
                    <div className="font-medium text-gray-800">Install BeamKlipper on the tablet</div>
                    <div className="text-sm text-gray-600">Download the APK from GitHub, install it, grant permissions. See <strong>Step 3</strong> below.</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">6</div>
                  <div>
                    <div className="font-medium text-gray-800">Connect printer to tablet via USB, add printer config</div>
                    <div className="text-sm text-gray-600">Plug in the printer, start BeamKlipper, load a community printer.cfg. See <strong>Step 6</strong> below.</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">7</div>
                  <div>
                    <div className="font-medium text-gray-800">Test movements and calibrate!</div>
                    <div className="text-sm text-gray-600">Home the printer, test each axis, PID tune, E-steps calibrate. See <strong>Step 7</strong> below.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* What to do RIGHT NOW */}
            <div className="mt-5 bg-emerald-600 text-white rounded-xl p-5">
              <h3 className="font-bold text-lg mb-2">👉 What to do RIGHT NOW:</h3>
              <ol className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="font-bold">1.</span>
                  <span>If you don't have an ST-Link V2 yet → <strong>order one now</strong> (AliExpress: search "ST-Link V2", ~$3-5, ships in 1-2 weeks). Or buy from Amazon for faster delivery.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">2.</span>
                  <span>If you don't have a microUSB OTG adapter → <strong>order one now</strong> (search "micro USB OTG adapter"). Also get a powered OTG hub if you want charging during prints.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">3.</span>
                  <span>While waiting for hardware → <strong>open your printer</strong> and identify the mainboard chip (STM32F103 vs GD32F303) and locate the SWD pins.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">4.</span>
                  <span>On your tablet → <strong>download BeamKlipper APK</strong> from <a href="https://github.com/utkabobr/BeamKlipper/releases/latest" className="underline font-bold" target="_blank" rel="noopener">github.com/utkabobr/BeamKlipper/releases</a> and install it now so it's ready.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">5.</span>
                  <span>Download the prebuilt firmware from <a href="https://github.com/utkabobr/klipper/tree/prebuilt-v0.12.0" className="underline font-bold" target="_blank" rel="noopener">utkabobr/klipper prebuilt</a> and save it to your PC — you'll need it for the ST-Link flash.</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="text-3xl mb-2">📱</div>
              <h3 className="font-bold text-gray-800">Tablet as Host</h3>
              <p className="text-sm text-gray-600 mt-1">Your SM-T395 replaces the Raspberry Pi. Built-in touchscreen, WiFi, battery backup, and zero extra cost.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-bold text-gray-800">BeamKlipper</h3>
              <p className="text-sm text-gray-600 mt-1">One app does it all: Klipper + Moonraker + Fluidd/Mainsail. No root, no Linux knowledge needed.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="text-3xl mb-2">🔧</div>
              <h3 className="font-bold text-gray-800">ST-Link V2 Flash</h3>
              <p className="text-sm text-gray-600 mt-1">Reliable firmware flashing via SWD debug pins. Bypasses SD card issues entirely.</p>
            </div>
          </div>

          {/* Architecture Diagram */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
            <h3 className="font-bold text-gray-800 mb-4 text-center">How It All Connects</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 w-48">
                <div className="text-3xl mb-2">📱</div>
                <div className="font-bold text-blue-800 text-sm">Galaxy Tab SM-T395</div>
                <div className="text-xs text-blue-600 mt-1">BeamKlipper App</div>
                <div className="text-xs text-gray-500">Klipper + Moonraker + Fluidd</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-xs text-gray-500 mb-1">WiFi / USB OTG</div>
                <div className="text-2xl">⇄</div>
              </div>
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 w-48">
                <div className="text-3xl mb-2">🖨️</div>
                <div className="font-bold text-green-800 text-sm">Ender 3 V3 SE</div>
                <div className="text-xs text-green-600 mt-1">Klipper Firmware</div>
                <div className="text-xs text-gray-500">STM32F103 MCU</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-xs text-gray-500 mb-1">SWD (one-time)</div>
                <div className="text-2xl">⇄</div>
              </div>
              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4 w-48">
                <div className="text-3xl mb-2">🔧</div>
                <div className="font-bold text-orange-800 text-sm">ST-Link V2</div>
                <div className="text-xs text-orange-600 mt-1">Firmware Flash</div>
                <div className="text-xs text-gray-500">One-time setup</div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step) => (
              <section
                key={step.id}
                id={`step-${step.id}`}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden scroll-mt-20"
              >
                <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.id}
                  </span>
                  <h2 className="text-xl font-bold text-gray-800">
                    <span className="mr-2">{step.icon}</span>
                    {step.title}
                  </h2>
                </div>
                <div className="px-6 py-6">
                  {step.content}
                </div>
              </section>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8 mb-12">
            <button
              onClick={() => scrollToStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className="px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              ← Previous Step
            </button>
            <button
              onClick={() => scrollToStep(Math.min(steps.length, currentStep + 1))}
              disabled={currentStep === steps.length}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              Next Step →
            </button>
          </div>

          {/* Footer */}
          <footer className="border-t border-gray-200 pt-8 pb-12 text-center text-sm text-gray-500">
            <p className="mb-2">
              This guide is community-sourced. Always verify information against official documentation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <a href="https://www.klipper3d.org/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Klipper Docs</a>
              <a href="https://github.com/utkabobr/BeamKlipper" target="_blank" rel="noopener" className="text-blue-600 hover:underline">BeamKlipper</a>
              <a href="https://www.klipper3d.org/Bootloaders.html" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Bootloaders Guide</a>
              <a href="https://pblvsky.gitbook.io/ender3v3se/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Ender 3 V3 SE Wiki</a>
              <a href="https://github.com/d4rk50ul1/klipper-on-android" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Klipper on Android (Termux)</a>
            </div>
            <p className="mt-4 text-xs text-gray-400">
              ⚠️ Flashing firmware carries risk. Proceed at your own risk. The authors are not responsible for any damage.
            </p>
          </footer>
        </main>
      </div>

      {/* Mobile Step Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 shadow-lg z-50">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 disabled:opacity-50"
          >
            ← Prev
          </button>
          <span className="text-sm text-gray-500 font-medium">
            Step {currentStep} of {steps.length}
          </span>
          <button
            onClick={() => scrollToStep(Math.min(steps.length, currentStep + 1))}
            disabled={currentStep === steps.length}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium disabled:opacity-50"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
