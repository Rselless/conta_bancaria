import readlinesync from "readline-sync";
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";

export function main() {
    let opcao: number;

const conta:Conta=new Conta(1,123,1,'Adriana',10000);

conta.sacar(10500);
conta.visualizar();
conta.depositar(5000);
conta.visualizar();
conta.sacar(10500);
conta.visualizar();

    while (true) {
        console.log(colors.bg.blue,colors.fg.white,"\n*****************************************************");
        console.log("                                                     ");
        console.log("                DRESSED BANK                         ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("****************************************************",colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.cyanstrong,"\nDressed Bank - O banco sem transparencia!");
            sobre();
            console.log(colors.reset,"");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.greenstrong,"\n\nCriar Conta\n\n",colors.reset);
                break;
            case 2:
                console.log(colors.fg.greenstrong,"\n\nListar todas as Contas\n\n",colors.reset);
                break;
            case 3:
                console.log(colors.fg.greenstrong,"\n\nConsultar dados da Conta - por número\n\n",colors.reset);
                break;
            case 4:
                console.log(colors.fg.greenstrong,"\n\nAtualizar dados da Conta\n\n",colors.reset);
                break;
            case 5:
                console.log(colors.fg.greenstrong,"\n\nApagar uma Conta\n\n",colors.reset);
                break;
            case 6:
                console.log(colors.fg.greenstrong,"\n\nSaque\n\n",colors.reset);
                const saque:number=readlinesync.questionFloat(`Digite valor do saque: `)
                conta.sacar(saque);
                conta.visualizar();
                break;
            case 7:
                console.log(colors.fg.greenstrong,"\n\nDepósito\n\n",colors.reset);
                const deposito:number=readlinesync.questionFloat(`Digite valor do deposito: `)
                conta.depositar(deposito);
                conta.visualizar();
                break;
            case 8:
                console.log(colors.fg.greenstrong,"\n\nTransferência entre Contas\n\n",colors.reset);
                break;
            default:
                console.log(colors.fg.greenstrong,"\nOpção Inválida!\n",colors.reset);
                break}
    }
}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Rafael Selles - rafa_sant10@hotmail.com");
    console.log("https://github.com/Rselless");
    console.log("*****************************************************");
}
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}
main();