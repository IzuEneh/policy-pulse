import "cheerio";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { DocxLoader } from "@langchain/community/document_loaders/fs/docx";

const loader = new DocxLoader("./../policies/bill-1.txt");
const docs = await loader.load();
