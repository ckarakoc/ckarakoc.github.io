import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";

import { MenubarModule } from "primeng/menubar";
import { MenuItem, MessageService } from "primeng/api";
import { DockModule } from "primeng/dock";
import { Terminal, TerminalModule, TerminalService } from "primeng/terminal";
import { DialogModule } from "primeng/dialog";
import { AboutDialogComponent } from "../../pages/desktop/about-dialog/about-dialog.component";
import { Subscription } from "rxjs";
import { ToastModule } from "primeng/toast";
import { TreeModule } from "primeng/tree";
import { FinderService } from "../../../services/finder.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MenubarModule,
    DockModule,
    NgOptimizedImage,
    DialogModule,
    TerminalModule,
    AboutDialogComponent,
    ToastModule,
    TreeModule,
  ],
  providers: [TerminalService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  dockItems: MenuItem[] | undefined;
  nodes: any[] = [];
  displayTerminal: boolean = false;
  displayFinder: boolean = false;

  @ViewChild('dialogAbout') aboutDialogComponent!: AboutDialogComponent;
  @ViewChild('terminal') terminal!: Terminal;

  subscription: Subscription | undefined;

  constructor(private terminalService: TerminalService, private messageService: MessageService, private finderService: FinderService) {
  }

  ngOnInit() {
    this.dockItems = [
      {
        label: 'Finder',
        tooltipOptions: {
          tooltipLabel: "Finder",
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15
        },
        icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg',
        command: () => {
          this.displayFinder = true;
        }
      },
      {
        label: 'Terminal',
        tooltipOptions: {
          tooltipLabel: 'Terminal',
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15,
          showDelay: 1000
        },
        icon: 'https://primefaces.org/cdn/primeng/images/dock/terminal.svg',
        command: () => {
          this.displayTerminal = !this.displayTerminal;
        }
      },
      {
        label: 'App Store',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg',
        command: () => {
          this.messageService.clear();
          this.messageService.add({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE', key: 'tc' });
        }
      },
      {
        label: 'Safari',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/safari.svg',
        command: () => {
          this.messageService.clear();
          this.messageService.add({ severity: 'warn', summary: 'Safari has stopped working', key: 'tc' });
        }
      },
      // {
      //   label: 'Photos',
      //   icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg',
      //   command: () => {
      //     this.messageService.clear();
      //     this.messageService.add({ severity: 'info', summary: 'No images present in this desktop.', key: 'tc' });
      //   }
      // },
      {
        label: 'GitHub',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/github.svg',
        command: () => {
          this.aboutDialogComponent.updateVisibility();
        }
      },
      {
        label: 'Trash',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png',
        command: () => {
          this.messageService.clear();
          this.messageService.add({ severity: 'info', summary: 'Empty Trash', key: 'tc' });
        }
      }
    ];

    this.subscription = this.terminalService.commandHandler.subscribe((command) => this.commandHandler(command));
    this.finderService.getFiles().then((data) => this.nodes = data)
  }

  commandHandler(text: any) {
    let response;
    let argsIndex = text.indexOf(' ');
    let command: string = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

    switch (command.toLowerCase().trim()) {
      case 'help':
        response = 'date \t\t- Gives the current date \n' +
          'greet {0} \t\t- Gives a greeting to {0} \n' +
          'random \t\t- Gives a random number [0-100)\n' +
          'list \t\t\t- Lists all my current projects minus tutorials\n' +
          'cls \t\t\t- Clears screen\n' +
          'certificates \t- Redirects to my certificates\n' +
          'tutorials \t\t- Redirects to my tutorials';
        break;
      case 'date':
        response = 'Today is ' + new Date().toDateString();
        break;
      case 'greet':
        let outputText = text.substring(argsIndex + 1);
        if (outputText === 'greet') outputText = '';
        response = 'Hola ' + outputText + '!';
        break;
      case 'random':
        response = Math.floor(Math.random() * 100);
        break;
      case 'list':
        response = '';
        let count = 0;
        for (let i = 0; i < this.nodes.length; i++) {
          let children = this.nodes[i].children;
          for (let child of children) {
            response += count + '~ \t' + child.label.toString().slice(0, -4) + '\n';
            count++;
          }
        }
        break;
      case 'certificates':
      case'tutorials':
        window.location.href = this.nodes[2].data;
        break;
      case 'cls':
        this.terminal.commands = [];
        break;
      default:
        response = 'Unknown command: ' + command;
        break;
    }

    if (response) {
      this.terminalService.sendResponse(response as string);
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  nodeSelect(event: any) {
    if (event.node.data) {
      window.location.href = event.node.data;
    }
  }
}
