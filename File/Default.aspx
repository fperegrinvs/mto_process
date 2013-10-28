<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="FileManager.Default" %>
<%@ Register TagPrefix="iz" Namespace="IZ.WebFileManager" Assembly="IZ.WebFileManager" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Untitled Page</title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <table>
                <tr>
                    <td valign="top">
                        <div style="position: relative; z-index: 200;">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td valign="top">
                        <iz:FileManager ID="FileManager1" runat="server" DownloadOnDoubleClick="True"  Height="600" Width="900">
                        </iz:FileManager>
                    </td>
                </tr>
            </table>
       </div>
    </form>
</body>
</html>