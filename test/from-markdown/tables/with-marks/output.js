/** @jsx h */
import h from 'h';

export default (
    <document>
        <table aligns={[null, null]}>
            <table_row>
                <table_cell>
                    <paragraph>A</paragraph>
                </table_cell>
                <table_cell>
                    <paragraph>B</paragraph>
                </table_cell>
            </table_row>
            <table_row>
                <table_cell>
                    <paragraph>
                        <code>A1</code>
                    </paragraph>
                </table_cell>
                <table_cell>
                    <paragraph>B1</paragraph>
                </table_cell>
            </table_row>
            <table_row>
                <table_cell>
                    <paragraph>
                        <bold>A2</bold>
                    </paragraph>
                </table_cell>
                <table_cell>
                    <paragraph>B2</paragraph>
                </table_cell>
            </table_row>
        </table>
    </document>
);
